import { ReactNode, ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const Button = ({ children, onClick, variant }: ButtonProps) => {
  switch (variant) {
    case "outlined":
      return <OutlinedButton onClick={onClick}>{children}</OutlinedButton>;
    case "text":
      return <TextButton onClick={onClick}>{children}</TextButton>;
    default:
      return <ContainedButton onClick={onClick}>{children}</ContainedButton>;
  }
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: string;
}

const ContainedButton = styled.button`
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

const OutlinedButton = styled(ContainedButton)`
  background: transparent;
  color: var(--c-primary);
  border: 1px solid var(--c-primary);
`;

const TextButton = styled(ContainedButton)`
  border-radius: 0;
  background: transparent;
  color: var(--c-primary);
  padding: 0;
  padding-bottom: 0.4rem;
  width: max-content;
  border-bottom: 1px solid currentColor;
`;

export default Button;
