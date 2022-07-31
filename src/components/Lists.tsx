import { useLocalStorage } from "../hooks/useLocalStorage";
import { useState } from "react";
import { List } from "./List";
import styled from "styled-components";
import { Input } from "./Input";
import { Button } from "./styled/Button";
import { MdAdd } from "react-icons/md";

const ListsContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const Lists = () => {
  const initialList = [
    { id: 1, listName: "To Do" },
    { id: 2, listName: "Doing" },
    { id: 3, listName: "Done" },
  ];
  const [lists, setLists] = useLocalStorage("lists", initialList);
  const [newList, setNewList] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);

  const addNewList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLists([...lists, { id: lists.length + 1, listName: newList }]);
    setNewList("");
    setIsInputActive((prev) => !prev);
  };

  const deleteList = (id: number) => {
    const newList = lists.filter((list) => list.id !== id);
    setLists(newList);
  };

  return (
    <ListsContainer>
      {lists.map((list, i) => (
        <List
          key={list.id}
          id={list.id}
          lists={lists}
          setLists={(lists: Array<{ id: number; listName: string }>) =>
            setLists(lists)
          }
          name={list.listName}
          onDelete={deleteList}
        />
      ))}
      <div>
        {isInputActive ? (
          <form onSubmit={addNewList}>
            <Input
              value={newList}
              onChange={(e) => setNewList(e.target.value)}
              label="Enter list title..."
              id="list"
              onBlur={() => setIsInputActive(false)}
              color="#fff"
            />
          </form>
        ) : (
          <Button onClick={() => setIsInputActive((prev) => !prev)}>
            <span>Add list</span>
            <MdAdd />
          </Button>
        )}
      </div>
    </ListsContainer>
  );
};
