import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";

interface ListProviderProps {
  children: React.ReactNode;
}

type ListProps = Array<{
  id: number;
  listName: string;
}>;

export type List = {
  lists?: Array<{ id: number; listName: string }>;
  setLists?: (p: ListProps) => void;
  addNewLIst?: (list: { id: number; listName: string }) => void;
};

const ListContext = createContext<List>({});

export const ListContextProvider = ({ children }: ListProviderProps) => {
  const [lists, setLists] = useState([
    { id: 1, listName: "To Do" },
    { id: 2, listName: "In Progress" },
    { id: 3, listName: "Testing" },
    { id: 4, listName: "Done" },
  ]);

  const addNewList = (list: { id: number; listName: string }) => {
    setLists([...lists, list]);
  };

  // Local Storage: setting & getting data
  useEffect(() => {
    const lists = JSON.parse(localStorage.getItem("lists") || "[]");

    if (lists) {
      setLists(lists);
    }
  }, []);

  useEffect(() => {
    if (lists) {
      localStorage.setItem("lists", JSON.stringify(lists));
    }
  }, [lists]);

  return (
    <ListContext.Provider value={{ lists, setLists }}>
      {children}
    </ListContext.Provider>
  );
};

export const useListContext = () => useContext(ListContext);
