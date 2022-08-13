import { ListsReducer } from "./lists";
import { CardsReducer } from "./cards/slice";
import { UserReducer } from "./user/slice";
import { CommentsReducer } from "./comments/slice";

export const reducers = {
  user: UserReducer,
  lists: ListsReducer,
  cards: CardsReducer,
  comments: CommentsReducer,
};

export const listsSelectors = {};

export { selectLists, selectList, ListsActions } from "./lists";
export { selectUser, UserActions } from "./user";
export { selectCards, CardsActions } from "./cards";
export { selectComments, CommentsActions } from "./comments";
