import styled from "styled-components";
import { ReactNode, KeyboardEvent } from "react";

const Modal = ({ children, close }: ModalProps) => {
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    console.log("first");
    if (event.key === "Escape") {
      close?.();
    }
  };
  return (
    <ModalContainer onClick={close} tabIndex={1}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

interface ModalProps {
  children: ReactNode;
  close?: () => void;
}
const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
`;
const ModalContent = styled.section`
  display: grid;
  gap: 1.5rem;
  justify-content: center;
  width: 30vw;
  padding: 2rem;
  background-color: #fff;
  color: #000;
  border-radius: 0.5rem;
`;

export default Modal;
