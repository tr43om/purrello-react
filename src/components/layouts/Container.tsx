import { ReactNode } from "react";
import styled from "styled-components";

const Container = ({ children }: ContainerProps) => {
  return <Root>{children}</Root>;
};

interface ContainerProps {
  children: ReactNode;
}

const Root = styled.div`
  width: 100%;
  max-width: 90rem;
  margin-inline: auto;
  padding-block: 2rem;
  padding-inline: 2rem;
`;

export default Container;
