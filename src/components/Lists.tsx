import { useState } from "react";
import { List } from "./List";
import styled from "styled-components";
import { Input } from "./Input";
import { Button } from "./styled/Button";
import { MdAdd } from "react-icons/md";
import { Types, useListContext } from "../contexts/ListContext";

const ListsContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const Lists = () => {
  const { state, dispatch } = useListContext();
  const [newList, setNewList] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);

  console.log(state);
  const addNewList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: Types.Add,
      payload: { id: Math.random() * 100, listName: newList },
    });
    setNewList("");
    setIsInputActive((prev) => !prev);
  };

  const deleteList = (id: number) => {
    dispatch({
      type: Types.Delete,
      payload: { id },
    });
  };

  return (
    <ListsContainer>
      {state &&
        state.map((list) => (
          <List
            key={list.id}
            id={list.id}
            lists={state}
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
