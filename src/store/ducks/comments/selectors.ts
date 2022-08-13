import { RootState } from "../../store";
import { createSelector } from "@reduxjs/toolkit";

export const selectComments = createSelector(
  (state: RootState) => state.comments.comments,
  (comments) => comments
);
