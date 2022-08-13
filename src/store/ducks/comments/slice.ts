import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CommentsType, CommentInputType } from "../../../types";
import { v4 as uuid } from "uuid";
import _ from "lodash";

interface CommentsSliceState {
  comments: CommentsType;
}

const initialState: CommentsSliceState = {
  comments: [],
};

const reducers = {
  addComment: (
    state: CommentsSliceState,
    action: PayloadAction<CommentInputType>
  ) => {
    state.comments.push({
      id: uuid(),
      content: action.payload.content,
      username: action.payload.username,
      cardID: action.payload.cardID,
      createdAt: new Date().toISOString(),
      avatar: `https://ui-avatars.com/api/?name=${action.payload.username}&background=random&rounded=true`,
    });
  },
  updateComment: (
    state: CommentsSliceState,
    action: PayloadAction<{
      id: string;
      comment: string;
    }>
  ) => {
    state.comments[
      _.findIndex(state.comments, (comment) => comment.id === action.payload.id)
    ].content = action.payload.comment;
  },

  deleteComment: (state: CommentsSliceState, action: PayloadAction<string>) => {
    state.comments = state.comments.filter(
      (comment) => comment.id !== action.payload
    );
  },
};

export const { actions, reducer } = createSlice({
  name: "comments",
  initialState,
  reducers,
});

export const CommentsActions = actions;

export const CommentsReducer = reducer;
