import { RootState } from "../../store";
import { createSelector } from "@reduxjs/toolkit";

export const selectList = createSelector(
  (state: RootState) => state.lists.lists,
  (_unused: any, id: string) => id,
  (lists, id) => lists.find((list) => list.id === id)
);

export const selectLists = createSelector(
  (state: RootState) => state.lists.lists,
  (lists) => lists
);
