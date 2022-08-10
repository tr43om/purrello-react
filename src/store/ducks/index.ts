import { ListsReducer } from "./Lists";
import { CardsReducer } from "./Cards/slice";

export const reducers = {
  lists: ListsReducer,
  cards: CardsReducer,
};

export const listsSelectors = {};

export { selectLists, selectList, ListsActions } from "./Lists";
export { selectCards, CardsActions } from "./Cards";
