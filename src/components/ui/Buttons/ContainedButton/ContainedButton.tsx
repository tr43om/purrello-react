import { ReactNode, ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const ContainedButton = ({ children, onClick, disabled }: ButtonProps) => {
  return (
    <Root onClick={onClick} disabled={disabled}>
      {children}
    </Root>
  );
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Root = styled.button`
  all: unset;
  display: flex;
  gap: 0.5rem;
  background-color: var(--c-primary);
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 2rem;
  color: #fff;
  background-color: var(--c-primary);
  transition: all 0.3s;
  opacity: ${(p) => (p.disabled ? 0.3 : 0.8)};
  border-radius: 100px;

  &:hover {
    opacity: 1;
  }
`;

export default ContainedButton;
