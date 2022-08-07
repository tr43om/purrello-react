import { ReactNode, ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const TextButton = ({ children, onClick }: ButtonProps) => {
  return <Root onClick={onClick}>{children}</Root>;
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Root = styled.button`
  all: unset;
  display: flex;
  width: max-content;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  color: var(--c-primary);
  background: transparent;

  border-bottom: 1px solid currentColor;
  padding-bottom: 0.4rem;
  transition: all 0.3s;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

export default TextButton;
