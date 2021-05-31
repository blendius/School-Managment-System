import { createContext, useContext } from "react";
import ProfesoriStore from "./profesoriStore";
import TerminiStore from "./terminiStore";

interface Store {
  profesoriStore: ProfesoriStore;
  terminiStore: TerminiStore;
}
export const store: Store = {
  profesoriStore: new ProfesoriStore(),
  terminiStore: new TerminiStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}