import { useState } from "react";

import styled from "styled-components";

// icons
import { MdAdd } from "react-icons/md";

// components
import { Input } from "../ui";
import { List } from "../List";
import { ContainedButton } from "../ui";

// redux
import { useSelector, useDispatch } from "react-redux";
import { ListsActions } from "../../store";
import { selectLists } from "../../store";

const Lists = () => {
  const lists = useSelector(selectLists);

  const dispatch = useDispatch();
  const [newList, setNewList] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);
  const { addList, deleteList } = ListsActions;

  const addNewList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addList(newList));
    setNewList("");
    setIsInputActive((prev) => !prev);
  };

  return (
    <ListsContainer>
      {lists &&
        lists.map((list) => (
          <List
            list={list}
            key={list.id}
            onDelete={(id) => dispatch(deleteList(id))}
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
              name="listsInput"
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
