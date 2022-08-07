import { ReactNode, ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const ContainedButton = ({ children, onClick }: ButtonProps) => {
  return <Root onClick={onClick}>{children}</Root>;
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Root = styled.button`
  all: unset;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 2rem;
  color: #fff;
  background-color: var(--c-primary);
  transition: all 0.3s;
  opacity: 0.8;
  border-radius: 100px;

  &:hover {
    opacity: 1;
  }
`;

export default ContainedButton;
