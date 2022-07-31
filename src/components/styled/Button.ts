import styled from "styled-components";

interface ButtonProps {}

export const Button = styled.button<ButtonProps>`
  all: unset;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 2rem;
  border-radius: 100px;
  color: var(--c-primary);
  background-color: transparent;
  border: 1px solid var(--c-primary);
  transition: all 0.3s;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;
