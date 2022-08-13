import { MdModeEdit } from "react-icons/md";
import { useState } from "react";
import styled from "styled-components";
// components
import { IconButton } from "../ui";
import { EditText } from "../EditText";

// redux
import { useSelector } from "react-redux";
import { selectUser } from "../../store";
import { UserActions } from "../../store";
import { useDispatch } from "react-redux";

const Header = () => {
  const { username } = useSelector(selectUser);
  const [name, setName] = useState(username || "");
  const [startEditing, setStartEditing] = useState(false);
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <EditText
        value={name}
        setValue={setName}
        startEditing={startEditing}
        setStartEditing={setStartEditing}
        store={() => dispatch(UserActions.changeUsername(name))}
        placeholder="Edit card name..."
      >
        <h2>👋 Hello, {username ? username : "Guest"}</h2>
      </EditText>
      {!startEditing && (
        <IconButton
          size="1rem"
          onClick={() => setStartEditing(true)}
          icon={<MdModeEdit />}
        />
      )}
    </HeaderContainer>
  );
};

export default Header;
const HeaderContainer = styled.header`
  display: flex;
  gap: 0.5rem;
`;
