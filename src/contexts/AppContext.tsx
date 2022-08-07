import React, { createContext, useContext, useState } from "react";
import StorageService from "../services/StorageService";
import { v4 as uuid } from "uuid";
import { CardsType, ListsType, CommentsType } from "../types";
import { useEffect } from "react";

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

  // init lists
  useEffect(() => {
    StorageService.setLists(lists);
  });

  const [cards, setCards] = useState(StorageService.getCards() || []);

  const [comments, setComments] = useState(StorageService.getComments() || []);

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

  const addCard = (title: string, listID: string, category: string) => {
    const newCard = {
      id: uuid(),
      cardTitle: title,
      listID,
      category,
      createdAt: new Date().toISOString(),
      createdBy: {
        username,
        photoURL: `https://ui-avatars.com/api/?name=${username}&background=random&rounded=true`,
      },
    };
    StorageService.setCards([...cards, newCard]);
    setCards([...cards, newCard]);
  };

  const deleteCard = (id: string) => {
    const newCards = cards.filter((card) => card.id !== id);
    StorageService.setCards(newCards);
    setCards(newCards);
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

  const updateCardDescription = (id: string, desc: string) => {
    const newCard = cards.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          cardDescription: desc,
        };

        return updatedItem;
      }

      return item;
    });

    StorageService.setCards(newCard);
    setCards(newCard);
  };

  const addComment = (
    content: string,
    avatar: string,
    username: string,
    cardID: string
  ) => {
    const newComment = {
      id: uuid(),
      content,
      cardID,
      avatar,
      username,
      createdAt: new Date().toISOString(),
    };
    StorageService.setComments([newComment, ...comments]);
    setComments([newComment, ...comments]);
  };

  const deleteComment = (id: string) => {
    const newComments = comments.filter((comment) => comment.id !== id);
    StorageService.setComments(newComments);
    setComments(newComments);
  };

  const updateComment = (id: string, text: string) => {
    const newComment = comments.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          content: text,
        };

        return updatedItem;
      }

      return item;
    });

    StorageService.setComments(newComment);
    setComments(newComment);
  };

  return (
    <AppContext.Provider
      value={{
        // user
        username,
        storeUsername,
        // lists
        lists,
        addList,
        deleteList,
        updateListName,
        // cards
        cards,
        addCard,
        deleteCard,
        updateCardName,
        updateCardDescription,
        // comments
        comments,
        addComment,
        deleteComment,
        updateComment,
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
  addCard: (title: string, listID: string, category: string) => void;
  deleteCard: (id: string) => void;
  updateCardName: (id: string, name: string) => void;
  updateCardDescription: (id: string, desc: string) => void;
  // comments types
  comments: CommentsType;
  addComment: (
    content: string,
    avatar: string,
    username: string,
    cardID: string
  ) => void;
  updateComment: (id: string, content: string) => void;

  deleteComment: (id: string) => void;
}
