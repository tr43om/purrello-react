import styled from "styled-components";
import { MdDeleteOutline } from "react-icons/md";
import { IconButton } from "./styled/IconButton";
import { Card } from "./Card";
import { Types, useListContext } from "../contexts/ListContext";
import { useState, useEffect } from "react";
import { Input } from "./Input";

type ListProps = {
  name: string;
  id: number;
  onDelete: (id: number) => void;
  lists: Array<{ id: number; listName: string }>;
};

const ListContainer = styled.div`
  background: #343434;
  box-shadow: 0px 5px 7px #2c2c2c;

  border-radius: 4px;
  position: relative;
  color: #fff;
  padding: 1.5rem;
  max-height: 80vh;
  overflow-y: auto;
`;

const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ListContent = styled.div`
  display: grid;
  gap: 0.5rem;
  overflow-y: auto;
`;

export const List = ({ name, onDelete, id, lists }: ListProps) => {
  const { dispatch } = useListContext();
  const currentList = lists.filter((list) => list.id === id)[0];
  const [listName, setListName] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const editListName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsEdit(false);
  };

  useEffect(() => {
    setListName(currentList.listName);
  }, [currentList.listName]);

  return (
    <ListContainer>
      <ListHeader>
        {isEdit ? (
          <form
            onSubmit={editListName}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
            }}
          >
            <Input
              value={listName}
              onChange={(e) => setListName(e.target.value)}
              label="New List Name"
              color="#fff"
              id="editName"
              onBlur={() => {
                setIsEdit(false);
              }}
            />
          </form>
        ) : (
          <h3 onClick={() => setIsEdit(true)}>{name}</h3>
        )}

        <IconButton onClick={() => onDelete(id)}>
          <MdDeleteOutline />
        </IconButton>
      </ListHeader>
      <ListContent>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ListContent>
    </ListContainer>
  );
};
