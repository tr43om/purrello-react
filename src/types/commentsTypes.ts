export type CommentType = {
  id: string;
  content: string;
  avatar: string;
  username: string;
  createdAt: string;
  cardID: string;
};

export type CommentInputType = Pick<
  CommentType,
  "content" | "username" | "cardID"
>;

export type CommentsType = Array<CommentType>;
