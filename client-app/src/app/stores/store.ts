import { createContext, useContext } from "react";
import ProfesoriStore from "./profesoriStore";
import TerminiStore from "./terminiStore";
import lendaStore from "./lendaStore";
import PostimiStore from "./postimetStore";
import NxenesiStore from "./nxenesiStore";
import ModalStore from "./modalStore";
import AdminStore from "./adminStore";
import CommonStore from "./commonStore";
import PrindiStore from "./prindiStore";
import PrindStoreAccount from "./prindStoreAccount";
import NjoftimiStore from "./njoftimiStore";

interface Store {
  profesoriStore: ProfesoriStore;
  terminiStore: TerminiStore;
  postimiStore: PostimiStore;
  lendaStore: lendaStore;
  nxenesiStore: NxenesiStore;
  modalStore: ModalStore;
  adminStore: AdminStore;
  commonStore: CommonStore;
  prindiStore: PrindiStore;
  prindStoreAccount: PrindStoreAccount;
  njoftimiStore: NjoftimiStore;
}
export const store: Store = {
  profesoriStore: new ProfesoriStore(),
  terminiStore: new TerminiStore(),
  postimiStore: new PostimiStore(),
  lendaStore: new lendaStore(),
  nxenesiStore: new NxenesiStore(),
  modalStore: new ModalStore(),
  adminStore: new AdminStore(),
  commonStore: new CommonStore(),
  prindiStore: new PrindiStore(),
  prindStoreAccount: new PrindStoreAccount(),
  njoftimiStore: new NjoftimiStore()
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
