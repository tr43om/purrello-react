import styled from "styled-components";
// react-hook-form
import { useForm, SubmitHandler, Controller } from "react-hook-form";

// Components
import { Input, IconButton, Modal, Error } from "../ui";

// yup
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// icons
import { MdSend } from "react-icons/md";
import FormInput from "../FormInput/FormInput";

// React
import { useState } from "react";

// redux
import { useSelector } from "react-redux";
import { selectUser } from "../../store";
import { UserActions } from "../../store";
import { useDispatch } from "react-redux";

const UserModal = () => {
  const schema = yup.object().shape({
    username: yup
      .string()
      .matches(/^([^0-9]*)$/, "Username should not contain numbers")
      .min(3, "at least 3 characters")
      .required("Username is a required field"),
  });

  const username = useSelector(selectUser);

  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<any> = (data) => {
    dispatch(UserActions.changeUsername(data.username));
  };

  return (
    <>
      {!username && (
        <Modal $align="stretch">
          <Title>🎉 Welcome</Title>

          <FormInput
            onSubmit={onSubmit}
            name="username"
            placeholder="Type your name..."
            schema={schema}
            button={
              <IconButton
                icon={<MdSend />}
                $color="var(--c-primary)"
                $size="1.5rem"
              />
            }
          />
        </Modal>
      )}
    </>
  );
};

type DataType = {
  username: string;
};

const FieldContainer = styled.div`
  display: flex;
  gap: 2rem;

  & > *:last-child {
    margin-top: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.4rem;
  color: var(--c-primary);
  margin-bottom: 2rem;
`;

export default UserModal;
