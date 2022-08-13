// React
import { useState } from "react";

// Components
import { Modal } from "../ui";
import { Input } from "../ui";
// redux
import { useSelector } from "react-redux";
import { selectUser } from "../../store";
import { UserActions } from "../../store";
import { useDispatch } from "react-redux";

const UserModal = () => {
  const [name, setName] = useState("");
  const { username } = useSelector(selectUser);

  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(UserActions.changeUsername(name));
  };

  return (
    <>
      {!username && (
        <Modal>
          <form onSubmit={handleSubmit}>
            <h2 style={{ color: "var(--c-primary)" }}>🎉 Welcome</h2>
            <Input
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              placeholder="Type your name here..."
              id="username"
            />
          </form>
        </Modal>
      )}
    </>
  );
};

export default UserModal;
