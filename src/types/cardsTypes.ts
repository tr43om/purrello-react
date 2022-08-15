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

export type CardsType = Array<CardType>;
