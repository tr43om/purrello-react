import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserSliceState {
  username: string;
}

const initialState: UserSliceState = {
  username: "",
};

const reducers = {
  changeUsername: (state: UserSliceState, action: PayloadAction<string>) => {
    state.username = action.payload;
  },
};

export const { actions, reducer } = createSlice({
  name: "user",
  initialState,
  reducers,
});

export const UserActions = actions;

export const UserReducer = reducer;
