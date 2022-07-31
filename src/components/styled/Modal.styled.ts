import styled from "styled-components";

export const Modal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);

  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
`;

export const ModalContent = styled.form`
  display: grid;
  gap: 1.5rem;
  justify-content: center;
  width: 30vw;
  padding: 2rem;
  background-color: #fff;
  color: #000;
  border-radius: 0.5rem;
`;
