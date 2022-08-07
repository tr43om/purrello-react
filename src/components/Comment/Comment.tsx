import { CommentType } from "../../types";
import styled from "styled-components";
import { parseISO, formatDistanceToNow } from "date-fns";
import { useAppContext } from "../../contexts/AppContext";
import { ContainedButton, IconButton, TextArea } from "../ui";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { useState } from "react";
export default function Comment({ data }: CommentProps) {
  const { deleteComment, updateComment } = useAppContext();
  const [comment, setComment] = useState(data.content || "");
  const [startEditingComment, setStartEditingComment] = useState(false);

  const handleUpdateComment = () => {
    updateComment(data.id, comment);
    setStartEditingComment(false);
  };
  return (
    <CommentContainer>
      <CommentHeader>
        <Avatar src={data.avatar} alt="avatar" />
        <Info>
          <Username>{data.username}</Username>
          <Created>{formatDistanceToNow(parseISO(data.createdAt))} ago</Created>
        </Info>
      </CommentHeader>
      {!startEditingComment ? (
        <CommentBody>{data.content}</CommentBody>
      ) : (
        <>
          <TextArea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <ContainedButton onClick={handleUpdateComment}>Save</ContainedButton>
        </>
      )}
      <Actions>
        <IconButton
          icon={<MdDelete />}
          size="1rem"
          onClick={() => deleteComment(data.id)}
        />
        <IconButton
          icon={<MdModeEdit />}
          size="1rem"
          onClick={() => setStartEditingComment((prev) => !prev)}
        />
      </Actions>
    </CommentContainer>
  );
}
type CommentProps = {
  data: CommentType;
};

const CommentContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 10px;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

const CommentBody = styled.div``;

const Avatar = styled.img`
  width: 2.5rem;
  aspect-ratio: 1;
`;

const Username = styled.p`
  font-size: 1rem;
`;

const Created = styled.span`
  font-size: 0.7rem;
  color: #7b7b7b;
`;

const Info = styled.div`
  display: grid;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.4rem;
`;
