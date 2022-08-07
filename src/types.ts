export type ListsType = Array<{
  id: string;
  listName: string;
}>;

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

export type CommentType = {
  id: string;
  content: string;
  avatar: string;
  username: string;
  createdAt: string;
  cardID: string;
};

export type CommentsType = Array<CommentType>;

export type CardsType = Array<CardType>;
