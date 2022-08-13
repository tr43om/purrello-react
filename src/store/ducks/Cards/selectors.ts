import { RootState } from "../../store";
import { createSelector } from "@reduxjs/toolkit";

export const selectCards = createSelector(
  (state: RootState) => state.cards.cards,
  (cards) => cards
);
