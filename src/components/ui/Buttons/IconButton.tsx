import { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

const IconButton = ({ size, icon, onClick }: IconButtonProps) => {
  return (
    <Root iconSize={size || "2rem"} onClick={onClick}>
      {icon}
    </Root>
  );
};

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: string;
  icon: ReactNode;
}

interface RootProps {
  iconSize: string;
}

const Root = styled.button<RootProps>`
  all: unset;
  cursor: pointer;
  font-size: ${(p) => p.iconSize};
  opacity: 0.7;
  transition: all 0.3s;

  &:hover {
    opacity: 1;
  }
`;

export default IconButton;
