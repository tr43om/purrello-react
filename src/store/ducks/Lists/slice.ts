import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ListsType, ListType } from "../../../types";
import { v4 as uuid } from "uuid";
import _ from "lodash";

interface ListsSliceState {
  lists: ListsType;
}

const initialState: ListsSliceState = {
  lists: [
    { id: uuid(), listName: "To Do" },
    { id: uuid(), listName: "In Progress" },
    { id: uuid(), listName: "Testing" },
    { id: uuid(), listName: "Done" },
  ],
};

const reducers = {
  addList: (state: ListsSliceState, action: PayloadAction<string>) => {
    state.lists.push({
      id: uuid(),
      listName: action.payload,
    });
  },
  deleteList: (state: ListsSliceState, action: PayloadAction<string>) => {
    state.lists = state.lists.filter((list) => list.id !== action.payload);
  },
  updateList: (state: ListsSliceState, action: PayloadAction<ListType>) => {
    state.lists[
      _.findIndex(state.lists, (list) => list.id === action.payload.id)
    ].listName = action.payload.listName;
  },
};

export const { actions, reducer } = createSlice({
  name: "lists",
  initialState,
  reducers,
});

export const ListsActions = actions;

export const ListsReducer = reducer;
