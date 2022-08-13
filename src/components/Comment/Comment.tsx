import { CommentType } from "../../types";
import styled from "styled-components";
import { parseISO, formatDistanceToNow } from "date-fns";
import { ContainedButton, IconButton, TextArea } from "../ui";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { useState } from "react";
<<<<<<< HEAD
import { FormInput } from "../FormInput";
import { SubmitHandler } from "react-hook-form";
import * as yup from "yup";

export default function Comment({ comment }: CommentProps) {
  const { deleteComment, updateComment } = useAppContext();

=======

// redux
import { useDispatch } from "react-redux";
import { CommentsActions } from "../../store";
export default function Comment({ data }: CommentProps) {
  const [comment, setComment] = useState(data.content || "");
>>>>>>> feature/implementing-redux
  const [startEditingComment, setStartEditingComment] = useState(false);
  const dispatch = useDispatch();

<<<<<<< HEAD
  const schema = yup.object().shape({
    editComment: yup.string().min(1, "Comment should be at least 1 character"),
  });

  const handleUpdateComment: SubmitHandler<any> = (data) => {
    updateComment(comment.id, data.editComment);

=======
  const handleUpdateComment = () => {
    dispatch(
      CommentsActions.updateComment({
        id: data.id,
        comment,
      })
    );
>>>>>>> feature/implementing-redux
    setStartEditingComment(false);
  };
  return (
    <CommentContainer>
      <CommentHeader>
        <Avatar src={comment.avatar} alt="avatar" />
        <Info>
          <Username>{comment.username}</Username>
          <Created>
            {formatDistanceToNow(parseISO(comment.createdAt))} ago
          </Created>
        </Info>
      </CommentHeader>
      {!startEditingComment ? (
        <CommentBody>{comment.content}</CommentBody>
      ) : (
        <>
          <FormInput
            onSubmit={handleUpdateComment}
            name="editComment"
            schema={schema}
            type="textarea"
            button={<ContainedButton>Save</ContainedButton>}
          />
        </>
      )}
      <Actions>
        <IconButton
          icon={<MdDelete />}
<<<<<<< HEAD
          $size="1rem"
          $color="#000"
          onClick={() => deleteComment(comment.id)}
=======
          size="1rem"
          onClick={() => dispatch(CommentsActions.deleteComment(data.id))}
>>>>>>> feature/implementing-redux
        />
        <IconButton
          icon={<MdModeEdit />}
          $size="1rem"
          $color="#000"
          onClick={() => setStartEditingComment((prev) => !prev)}
        />
      </Actions>
    </CommentContainer>
  );
}
type CommentProps = {
  comment: CommentType;
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
