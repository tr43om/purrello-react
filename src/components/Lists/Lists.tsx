import { useState } from "react";

import styled from "styled-components";
import { ContainedButton } from "../ui";
import { MdAdd } from "react-icons/md";
import { useAppContext } from "../../contexts/AppContext";

// components
import { Input } from "../ui";
import { List } from "../List";

const Lists = () => {
  const [newList, setNewList] = useState("");
  const { addList, deleteList, lists } = useAppContext();
  const [isInputActive, setIsInputActive] = useState(false);

  const addNewList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addList(newList);
    setNewList("");
    setIsInputActive((prev) => !prev);
  };

  return (
    <ListsContainer>
      {lists &&
        lists.map((list) => (
          <List
            key={list.id}
            id={list.id}
            lists={lists}
            name={list.listName}
            onDelete={deleteList}
          />
        ))}
      <div>
        {isInputActive ? (
          <form onSubmit={addNewList}>
            <Input
              value={newList}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewList(e.target.value)
              }
              placeholder="Enter list title..."
              id="list"
              onBlur={() => setIsInputActive(false)}
              color="#fff"
            />
          </form>
        ) : (
          <ContainedButton onClick={() => setIsInputActive((prev) => !prev)}>
            <span>Add list</span>
            <MdAdd />
          </ContainedButton>
        )}
      </div>
    </ListsContainer>
  );
};

export default Lists;

const ListsContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;
