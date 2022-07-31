import styled from "styled-components";
import { MdModeEdit } from "react-icons/md";
import { IconButton } from "./styled/IconButton";
type CardProps = {};

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #525252;
  box-shadow: 0px 5px 7px #2c2c2c;

  width: 100%;
  border-radius: 4px;
  position: relative;
  color: #fff;
  padding: 1rem;
`;
export const Card = () => {
  return (
    <CardContainer>
      <p>Lorem ipsum dolor</p>
      <IconButton size="1rem">
        <MdModeEdit />
      </IconButton>
    </CardContainer>
  );
};
