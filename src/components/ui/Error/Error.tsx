import styled from "styled-components";
import { ReactNode } from "react";

const Error = ({ children }: ErrorProps) => {
  return <Root>💢 {children} !</Root>;
};

interface ErrorProps {
  children: ReactNode;
}

const Root = styled.div`
  color: #f21d1d;
  font-weight: bold;
  margin-top: 0.5rem;
`;

export default Error;
