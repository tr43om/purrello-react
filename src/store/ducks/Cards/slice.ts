import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CardsType, CardType } from "../../../types";
import { v4 as uuid } from "uuid";
import _ from "lodash";

interface CardsSliceState {
  cards: CardsType;
}

const initialState: CardsSliceState = {
  cards: [],
};

const reducers = {
  addCard: (state: CardsSliceState, action: PayloadAction<CardType>) => {
    state.cards.push({
      id: uuid(),
      cardTitle: action.payload.cardTitle,
      listID: action.payload.listID,
      category: action.payload.listID,
      createdAt: new Date().toISOString(),
      createdBy: {
        username: action.payload.createdBy.username,
        photoURL: `https://ui-avatars.com/api/?name=aboba&background=random&rounded=true`,
      },
    });
  },
};

export const { actions, reducer } = createSlice({
  name: "cards",
  initialState,
  reducers,
});

export const CardsActions = actions;

export const CardsReducer = reducer;
