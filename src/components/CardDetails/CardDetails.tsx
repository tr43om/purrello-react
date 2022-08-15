import styled from "styled-components";
import { useState, useMemo } from "react";

// data-fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { parseISO } from "date-fns/fp";

// types
import { CardType } from "../../types";

// components
import { EditText } from "../EditText";
import { TextButton, IconButton, ContainedButton } from "../ui";
import { Comment } from "../Comment";
import { FormInput } from "../FormInput";

// icons
import { MdModeEdit, MdSend } from "react-icons/md";

// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectComments } from "../../store";
import { CommentsActions } from "../../store/ducks/comments/slice";
import { selectUser } from "../../store/ducks/user/selectors";
import { CardsActions } from "../../store/ducks/cards/slice";

// react-form-hook & yup
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const CardDetails = ({ card }: CardDetailsProps) => {
  // states
  const [startEditing, setStartEditing] = useState(false);

  // hook-form
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      comment: "",
    },

    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // redux
  const comments = useSelector(selectComments);
  const username = useSelector(selectUser);
  const dispatch = useDispatch();

  const currentComments = useMemo(
    () => comments.filter((comment) => comment.cardID === card.id),
    [comments, card.id]
  );

  const storeCardDescription = (desc: string) => {
    dispatch(
      CardsActions.updateCardDescription({
        id: card.id,
        desc: desc,
      })
    );
    setStartEditing(false);
  };

  const storeComment: SubmitHandler<DataType> = (data) => {
    dispatch(
      CommentsActions.addComment({
        content: data.comment,
        username,
        cardID: card.id,
      })
    );
    reset();
  };

  return (
    <DetailsContainer>
      <DetailsHeader>
        <div>
          <DetailsTitle>{card.cardTitle}</DetailsTitle>
          <p style={{ marginTop: "-1.5rem", color: "var(--c-text-secondary)" }}>
            in list {card.category}
          </p>
        </div>
        <ContainedButton
          onClick={() => dispatch(CardsActions.deleteCard(card.id))}
        >
          Delete card
        </ContainedButton>
      </DetailsHeader>
      <DetailsDescription>
        <DetailsTitle>
          <>Description</>
          {card.cardDescription && (
            <IconButton
              icon={<MdModeEdit />}
              $size="1rem"
              $color="#000"
              onClick={() => setStartEditing(true)}
            />
          )}
        </DetailsTitle>

        <EditText
          startEditing={startEditing}
          store={(v) => storeCardDescription(v)}
          placeholder="Edit card description..."
          defaultValue={card.cardDescription}
        >
          <p>{card.cardDescription}</p>
        </EditText>
        {!card.cardDescription && !startEditing && (
          <TextButton onClick={() => setStartEditing(true)}>
            Add description
          </TextButton>
        )}
      </DetailsDescription>
      <DetailsActivity>
        <DetailsTitle>Activity</DetailsTitle>
        <DetailsCommentField>
          <Avatar src={card.createdBy.photoURL} alt="avatar" />
          <form onSubmit={handleSubmit(storeComment)}>
            <FormInput
              name="comment"
              control={control}
              placeholder="Type a new comment..."
              type="textarea"
              button={
                <IconButton icon={<MdSend />} $color="var(--c-primary)" />
              }
            />
          </form>
        </DetailsCommentField>

        <Activities>
          <Activity>
            <b>{card.createdBy.username}</b> created this card to{" "}
            {card.category} list
            <p>{formatDistanceToNow(parseISO(card.createdAt))} ago</p>
          </Activity>

          <DetailsComments>
            {currentComments &&
              currentComments.map((comment) => <Comment comment={comment} />)}
          </DetailsComments>
        </Activities>
      </DetailsActivity>
    </DetailsContainer>
  );
};

export default CardDetails;

const schema = yup.object().shape({
  comment: yup.string().min(1, "Comment should be at least 1 character"),
});

type CardDetailsProps = {
  card: CardType;
};

type DataType = {
  comment: string;
};

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 2rem;

  & > * {
    width: 100%;
    padding-bottom: 3rem;
    border-bottom: 2px solid #eae9e9;
  }
`;

const DetailsHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DetailsTitle = styled.h3`
  display: flex;
  gap: 0.8rem;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const DetailsDescription = styled.div``;
const DetailsActivity = styled.div`
  display: grid;
  gap: 1rem;
  align-self: center;

  @media screen and (min-width: 900px) {
    width: 100%;
    max-width: 35rem;
  }
`;
const DetailsComments = styled.div`
  display: grid;
  gap: 1rem;
`;
const DetailsCommentField = styled.div`
  display: flex;
  gap: 0.7rem;

  align-items: flex-start;
`;
const Avatar = styled.img`
  width: 3rem;

  aspect-ratio: 1;
`;
const Activities = styled.div`
  display: grid;

  gap: 1rem;
`;

const Activity = styled.div`
  /* max-width: 50vw; */
`;
