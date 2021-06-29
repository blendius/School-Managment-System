import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Item, List, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';



export default observer(function ProfesoriList() {
    const { profesoriStore } = useStore();
    const { profesoretByDate } = profesoriStore;
    return (
        <Segment clearing>
            <List divided relaxed >
                {profesoretByDate.map(profesori => (
                    <List.Item key={profesori.id}>
                        <List.Icon name='address card' size='large' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>{profesori.email}</List.Header>
                            <div className="data" ><label>Emri :  </label> {profesori.name} </div>
                            <div className="data" ><label>Grada Akademike:  </label>  {profesori.gradaAkademike}</div>
                            <div className="data" ><label>Data e Punesimit:  </label> {profesori.dataRegjistrimit} </div>
                            
                        </List.Content>
                        <Item.Extra>
                            <Button onClick={() => profesoriStore.selectProfessor(profesori.id)} floated='right' content='Shiko Detajet' color='blue' />

                        </Item.Extra>

                    </List.Item>


                ))}

            </List>
        </Segment>
    )
})