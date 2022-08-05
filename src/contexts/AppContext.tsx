import React, { createContext, useContext, useState } from "react";
import StorageService from "../services/StorageService";
import { v4 as uuid } from "uuid";
import { CardsType, ListsType } from "../types";

const AppContext = createContext<IApp>({} as IApp);

export const AppContextProvider = ({ children }: AppProviderProps) => {
  const [username, setUsername] = useState<string>(
    StorageService.getUsername() || ""
  );
  const defaultList = [
    { id: uuid(), listName: "To Do" },
    { id: uuid(), listName: "In Progress" },
    { id: uuid(), listName: "Testing" },
    { id: uuid(), listName: "Done" },
  ];

  const [lists, setLists] = useState(StorageService.getLists() || defaultList);

  const [cards, setCards] = useState(StorageService.getCards() || []);

  const storeUsername = (username: string) => {
    setUsername(username);
    StorageService.setUsername(username);
  };

  const addList = (name: string) => {
    const newList = {
      id: uuid(),
      listName: name,
    };
    StorageService.setLists([...lists, newList]);
    setLists([...lists, newList]);
  };

  const deleteList = (id: string) => {
    const newList = lists.filter((list) => list.id !== id);
    StorageService.setLists(newList);
    setLists(newList);
  };

  const updateListName = (id: string, name: string) => {
    const newList = lists.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          listName: name,
        };

        return updatedItem;
      }

      return item;
    });

    StorageService.setLists(newList);
    setLists(newList);
  };

  const addCard = (title: string, listID: string) => {
    const newCard = {
      id: uuid(),
      cardTitle: title,
      listID,
    };
    StorageService.setCards([...cards, newCard]);
    setCards([...cards, newCard]);
  };

  const updateCardName = (id: string, name: string) => {
    const newCard = cards.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          cardTitle: name,
        };

        return updatedItem;
      }

      return item;
    });

    StorageService.setCards(newCard);
    setCards(newCard);
  };

  return (
    <AppContext.Provider
      value={{
        username,
        storeUsername,
        lists,
        addList,
        deleteList,
        updateListName,
        cards,
        addCard,
        updateCardName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

interface AppProviderProps {
  children: React.ReactNode;
}

interface IApp {
  // user types
  username: string;
  storeUsername: (username: string) => void;
  // lists types
  lists: ListsType;
  addList: (name: string) => void;
  deleteList: (id: string) => void;
  updateListName: (id: string, name: string) => void;
  // cards types
  cards: CardsType;
  addCard: (title: string, listID: string) => void;
  updateCardName: (id: string, name: string) => void;
}
