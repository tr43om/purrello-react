import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CardsType, CardType, CardInputType } from "../../../types";
import { v4 as uuid } from "uuid";
import _ from "lodash";

interface CardsSliceState {
  cards: CardsType;
}

const initialState: CardsSliceState = {
  cards: [],
};

const reducers = {
  addCard: (state: CardsSliceState, action: PayloadAction<CardInputType>) => {
    state.cards.push({
      id: uuid(),
      cardTitle: action.payload.cardTitle,
      listID: action.payload.listID,
      category: action.payload.category,
      createdAt: new Date().toISOString(),
      createdBy: {
        username: action.payload.createdBy.username,
        photoURL: action.payload.createdBy.photoURL,
      },
    });
  },
  updateCardName: (
    state: CardsSliceState,
    action: PayloadAction<{ cardTitle: string; id: string }>
  ) => {
    state.cards[
      _.findIndex(state.cards, (card) => card.id === action.payload.id)
    ].cardTitle = action.payload.cardTitle;
  },

  updateCardDescription: (
    state: CardsSliceState,
    action: PayloadAction<{ desc: string; id: string }>
  ) => {
    state.cards[
      _.findIndex(state.cards, (card) => card.id === action.payload.id)
    ].cardDescription = action.payload.desc;
  },

  deleteCard: (state: CardsSliceState, action: PayloadAction<string>) => {
    state.cards = state.cards.filter((card) => card.id !== action.payload);
  },
};

export const { actions, reducer } = createSlice({
  name: "cards",
  initialState,
  reducers,
});

export const CardsActions = actions;

export const CardsReducer = reducer;
