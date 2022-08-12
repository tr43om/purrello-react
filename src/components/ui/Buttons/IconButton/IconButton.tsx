import { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

const IconButton = ({
  $size,
  icon,
  onClick,
  disabled,
  $color,
}: IconButtonProps) => {
  return (
    <Root
      $iconSize={$size || "2rem"}
      onClick={onClick}
      disabled={disabled}
      $color={$color || "white"}
    >
      {icon}
    </Root>
  );
};

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $size?: string;
  $color?: string;
  icon: ReactNode;
}

interface RootProps {
  $iconSize?: string;
  $color?: string;
}

const Root = styled.button<RootProps>`
  all: unset;
  cursor: pointer;
  font-size: ${(p) => p.$iconSize};
  opacity: ${(p) => (p.disabled ? 0.2 : 0.6)};
  transition: all 0.3s;
  color: ${(p) => p.$color};
  &:hover {
    opacity: ${(p) => (p.disabled ? 0.2 : 1)};
  }
`;

export default IconButton;
