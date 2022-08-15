import styled from "styled-components";
import { MdDeleteOutline } from "react-icons/md";
import { useState, useMemo } from "react";

// components
import { EditText } from "../EditText";
import { Card } from "../Card";
import { IconButton } from "../ui";

import { ListType } from "../../types";
import { TextButton } from "../ui";
import { useSelector } from "react-redux";
import { ListsActions } from "../../store";
import { useDispatch } from "react-redux";
import { selectCards } from "../../store/ducks/cards/selectors";
import { CardsActions } from "../../store";
import { selectUser } from "../../store";

const List = ({ onDelete, list }: ListProps) => {
  const cards = useSelector(selectCards);
  const username = useSelector(selectUser);
  const [startEditingListName, setStartEditingListName] = useState(false);
  const [startTypingCardName, setStartTypingCardName] = useState(false);

  const dispatch = useDispatch();

  const { updateList } = ListsActions;
  const { addCard } = CardsActions;

  const currentCards = useMemo(
    () => cards.filter((card) => card.listID === list.id),
    [cards, list.id]
  );

  return (
    <ListContainer>
      <ListHeader>
        <EditText
          startEditing={startEditingListName}
          defaultValue={list.listName}
          store={(listName) => {
            dispatch(updateList({ id: list.id, listName }));
            setStartEditingListName(false);
          }}
          placeholder="Edit card name..."
        >
          <h3 onClick={() => setStartEditingListName(true)}>{list.listName}</h3>
        </EditText>

        <IconButton
          onClick={() => onDelete(list.id)}
          icon={<MdDeleteOutline />}
        />
      </ListHeader>
      <ListContent>
        {currentCards.map((card) => (
          <Card key={card.id} card={card} />
        ))}

        <EditText
          startEditing={startTypingCardName}
          store={(cardName) => {
            dispatch(
              addCard({
                cardTitle: cardName,
                listID: list.id,
                category: list.listName,
                createdBy: {
                  username,
                  photoURL: `https://ui-avatars.com/api/?name=${username}&background=random&rounded=true`,
                },
              })
            );
            setStartTypingCardName(false);
          }}
          placeholder="Create a new card..."
        >
          <TextButton onClick={() => setStartTypingCardName(true)}>
            Add new card
          </TextButton>
        </EditText>
      </ListContent>
    </ListContainer>
  );
};

export default List;

type ListProps = {
  list: ListType;
  onDelete: (id: string) => void;
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
