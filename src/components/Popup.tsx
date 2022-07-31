import { Modal, ModalContent } from "./styled/Modal.styled";
import { useState } from "react";
import { useUserContext } from "../contexts/UserContext";
import { Input } from "./Input";

interface PopupProps {
  title?: string;
}

export const Popup = ({ title = `🎉 Welcome!` }: PopupProps) => {
  const [name, setName] = useState("");
  const { username, setUsername } = useUserContext();

  const storeUsername = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUsername?.(name); // ???
  };
  return (
    <>
      {!username && (
        <Modal>
          <ModalContent onSubmit={storeUsername}>
            <h2 style={{ color: "#F70A8D" }}>{title}</h2>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="What's your name?"
              id="name"
            />
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
