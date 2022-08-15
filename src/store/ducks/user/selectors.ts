import { RootState } from "../../store";
import { createSelector } from "@reduxjs/toolkit";

export const selectUser = createSelector(
  (state: RootState) => state.user.username,
  (user) => user
);
