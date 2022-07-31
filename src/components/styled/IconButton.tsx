import styled from "styled-components";

interface IconButtonProps {
  size?: string;
}

export const IconButton = styled.button<IconButtonProps>`
  all: unset;
  cursor: pointer;
  font-size: ${(p) => (p.size ? p.size : "2rem")};
  opacity: 0.7;
  transition: all 0.3s;

  &:hover {
    opacity: 1;
  }
`;
