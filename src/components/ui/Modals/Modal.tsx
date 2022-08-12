import styled from "styled-components";
import { ReactNode, KeyboardEvent } from "react";

const Modal = ({ children, close, $align }: ModalProps) => {
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    console.log("first");
    if (event.key === "Escape") {
      close?.();
    }
  };
  return (
    <ModalContainer onClick={close} tabIndex={1}>
      <ModalContent onClick={(e) => e.stopPropagation()} $align={$align}>
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

interface ModalProps {
  children: ReactNode;
  close?: () => void;
  $align?: string;
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
const ModalContent = styled.section<{
  $align?: string;
}>`
  display: grid;
  gap: 1.5rem;
  justify-content: ${(p) => p.$align || "center"};
  width: 100%;
  align-content: center;
  max-width: 90vw;
  min-height: 50vh;
  max-height: 85vh;
  padding: 2rem;
  background-color: #fff;
  color: #000;
  border-radius: 0.5rem;
  overflow-y: auto;

  @media screen and (min-width: 900px) {
    max-width: 60vw;
  }
`;

export default Modal;
