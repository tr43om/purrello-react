import styled from "styled-components";
// react-hook-form
import { useForm, SubmitHandler } from "react-hook-form";

// Components
import { IconButton, Modal } from "../ui";

// yup
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// icons
import { MdSend } from "react-icons/md";
import FormInput from "../FormInput/FormInput";

// redux
import { useSelector } from "react-redux";
import { selectUser } from "../../store";
import { UserActions } from "../../store";
import { useDispatch } from "react-redux";

const UserModal = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      username: "",
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const username = useSelector(selectUser);

  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<DataType> = (data) => {
    dispatch(UserActions.changeUsername(data.username));
  };

  return (
    <>
      {!username && (
        <Modal $align="stretch">
          <Title>🎉 Welcome</Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              name="username"
              placeholder="Type your name..."
              control={control}
              button={
                <IconButton
                  icon={<MdSend />}
                  $color="var(--c-primary)"
                  $size="1.5rem"
                />
              }
            />
          </form>
        </Modal>
      )}
    </>
  );
};

const schema = yup.object().shape({
  username: yup
    .string()
    .matches(/^([^0-9]*)$/, "Username should not contain numbers")
    .min(3, "at least 3 characters")
    .required("Username is a required field"),
});

type DataType = {
  username: string;
};

const Title = styled.h2`
  font-size: 2.4rem;
  color: var(--c-primary);
  margin-bottom: 2rem;
`;

export default UserModal;
