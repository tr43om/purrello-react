import { useUserContext } from "../contexts/UserContext";
import { MdModeEdit } from "react-icons/md";
import { IconButton } from "./styled/IconButton";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Input } from "./Input";

const HeaderContainer = styled.header`
  display: flex;
  gap: 0.5rem;
`;

export const Header = () => {
  const { username, setUsername } = useUserContext();
  const [name, setName] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const storeUsername = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUsername?.(name);
    setIsEdit(false);
  };

  // So we have text in input to edit
  useEffect(() => {
    if (username) setName(username);
  }, [username]);

  return (
    <HeaderContainer>
      {isEdit && username ? (
        <form
          onSubmit={storeUsername}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
          }}
        >
          <h2 style={{ whiteSpace: "nowrap", marginBottom: "-1rem" }}>
            👋 Hello,
          </h2>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="New username"
            color="#fff"
            id="editName"
            onBlur={() => {
              setIsEdit(false);
              if (name.length >= 1) setUsername?.(name);
            }}
          />
        </form>
      ) : (
        <h2>👋 Hello, {username ? username : "Guest"}</h2>
      )}
      {!isEdit && (
        <IconButton size="1rem" onClick={() => setIsEdit((prev) => !prev)}>
          <MdModeEdit />
        </IconButton>
      )}
    </HeaderContainer>
  );
};
