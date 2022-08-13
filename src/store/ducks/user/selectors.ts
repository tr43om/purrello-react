import { RootState } from "../../store";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const selectUser = createSelector(
  (state: RootState) => state.user.user,
  (user) => user
);

export const username = (state: RootState) => state.user.user;
