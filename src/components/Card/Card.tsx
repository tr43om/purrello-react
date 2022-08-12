import styled from "styled-components";
import { MdModeEdit } from "react-icons/md";
import { IconButton, Modal } from "../ui";
import { useState } from "react";
import { useAppContext } from "../../contexts/AppContext";
import { CardType } from "../../types";
// components
import { EditText } from "../EditText";
import { CardDetails } from "../CardDetails";

const Card = ({ card }: CardProps) => {
  const [startEditing, setStartEditing] = useState(false);
  const [cardTitle, setCardTitle] = useState(card.cardTitle);
  const { updateCardName } = useAppContext();
  const [isHovering, setIsHovering] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleMouseOver = () => setIsHovering(true);

  const handleMouseOut = () => setIsHovering(false);

  const storeCardName = () => {
    updateCardName(card.id, cardTitle);
    setStartEditing(false);
  };

  return (
    <>
      <CardContainer
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={() => setShowDetails(true)}
      >
        <EditText
          value={cardTitle}
          setValue={setCardTitle}
          startEditing={startEditing}
          setStartEditing={setStartEditing}
          store={storeCardName}
          placeholder="Edit card name..."
        >
          <p>{cardTitle}</p>
          {isHovering && (
            <IconButton
              $size="1rem"
              icon={<MdModeEdit />}
              onClick={(e) => {
                e.stopPropagation();
                setStartEditing(true);
              }}
            />
          )}
        </EditText>
      </CardContainer>
      {showDetails && (
        <Modal close={() => setShowDetails(false)} $align="stretch">
          <CardDetails card={card} />
        </Modal>
      )}
    </>
  );
};

export default Card;

type CardProps = {
  card: CardType;
};

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #525252;
  box-shadow: 0px 5px 7px #2c2c2c;

  width: 100%;
  border-radius: 4px;
  position: relative;
  color: #fff;
  padding: 1rem;
  opacity: 1;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
