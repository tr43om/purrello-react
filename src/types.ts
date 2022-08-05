export type ListsType = Array<{
  id: string;
  listName: string;
}>;

export type CardsType = Array<{
  id: string;
  cardTitle: string;
  cardDescription?: string;
  listID: string;
}>;
