import styled from "styled-components";
import { MdDeleteOutline } from "react-icons/md";
import { useState, useMemo } from "react";

// components
import { EditText } from "../EditText";
import { Card } from "../Card";
import { IconButton } from "../ui";
import { useAppContext } from "../../contexts/AppContext";
import { ListsType } from "../../types";
import { TextButton } from "../ui";

const List = ({ name, onDelete, id }: ListProps) => {
  const { updateListName, cards, addCard } = useAppContext();
  const [listName, setListName] = useState(name || "");
  const [cardName, setCardName] = useState("");
  const [startEditingListName, setStartEditingListName] = useState(false);
  const [startTypingCardName, setStartTypingCardName] = useState(false);

  const currentCards = useMemo(
    () => cards.filter((card) => card.listID === id),
    [cards, id]
  );

  return (
    <ListContainer>
      <ListHeader>
        <EditText
          value={listName}
          setValue={setListName}
          startEditing={startEditingListName}
          setStartEditing={setStartEditingListName}
          store={() => updateListName(id, listName)}
          placeholder="Edit card name..."
        >
          <h3 onClick={() => setStartEditingListName(true)}>{name}</h3>
        </EditText>

        <IconButton onClick={() => onDelete(id)} icon={<MdDeleteOutline />} />
      </ListHeader>
      <ListContent>
        {currentCards.map((card) => (
          <Card key={card.id} card={card} />
        ))}

        <EditText
          value={cardName}
          setValue={setCardName}
          startEditing={startTypingCardName}
          setStartEditing={setStartTypingCardName}
          store={() => {
            addCard(cardName, id, listName);
            setCardName("");
          }}
          placeholder="Create new card..."
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
  name: string;
  id: string;
  onDelete: (id: string) => void;
  lists: ListsType;
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
