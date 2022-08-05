import { ListsType, CardsType } from "../types";

export enum StorageKeys {
  LISTS = "lists",
  USERNAME = "name",
  CARDS = "cards",
}

class StorageService {
  getLists(): ListsType {
    return JSON.parse(localStorage.getItem(StorageKeys.LISTS) || "null");
  }

  setLists(lists: ListsType) {
    return localStorage.setItem(StorageKeys.LISTS, JSON.stringify(lists));
  }

  getCards(): CardsType {
    return JSON.parse(localStorage.getItem(StorageKeys.CARDS) || "null");
  }

  setCards(cards: CardsType) {
    return localStorage.setItem(StorageKeys.CARDS, JSON.stringify(cards));
  }

  getUsername() {
    return localStorage.getItem(StorageKeys.USERNAME);
  }

  setUsername(username: string) {
    return localStorage.setItem(StorageKeys.USERNAME, username);
  }
}

export default new StorageService();
