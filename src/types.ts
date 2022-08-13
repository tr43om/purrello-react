export type ListType = {
  id: string;
  listName: string;
};

export type UserType = {
  username: string;
};

export type CardType = {
  id: string;
  cardTitle: string;
  cardDescription?: string;
  createdBy: {
    username: string;
    photoURL: string;
  };
  createdAt: string;
  category: string;
  listID: string;
};

export type CardInputType = Pick<
  CardType,
  "cardTitle" | "listID" | "cardDescription" | "category" | "createdBy"
>;

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

export type ListsType = Array<ListType>;

export type CommentsType = Array<CommentType>;

export type CardsType = Array<CardType>;
