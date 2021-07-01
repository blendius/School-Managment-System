import React from "react";
import { Button, Card } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";

export default function OrariDetails() {
  const { orariStore } = useStore();
  const { selectedOrari: orari, openForm, cancelSelectedOrari } = orariStore;

  if (!orari) return <LoadingComponent />;

  return (
    <Card>
      <Card.Content>
        <Card.Header>Lenda Standin</Card.Header>
        <Card.Meta>
          <span>{orari.merkure6}</span>
          <span>{orari.premte1}</span>
        </Card.Meta>
        <Card.Description>Salla:{orari.hene2}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button
            onClick={() => openForm(orari.orariId)}
            basic
            color="blue"
            content="Edit"
          ></Button>
          <Button
            onClick={cancelSelectedOrari}
            basic
            color="grey"
            content="Cancel"
          ></Button>
        </Button.Group>
      </Card.Content>
    </Card>
  );
}