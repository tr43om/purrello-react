import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../../types";

interface UserSliceState {
  user: UserType;
}

const initialState: UserSliceState = {
  user: {
    username: "Guest",
  },
};

const reducers = {
  changeUsername: (state: UserSliceState, action: PayloadAction<string>) => {
    state.user.username = action.payload;
  },
};

export const { actions, reducer } = createSlice({
  name: "user",
  initialState,
  reducers,
});

export const UserActions = actions;

export const UserReducer = reducer;
