// React
import { useState } from "react";
// Context
import { useAppContext } from "../contexts/AppContext";

// Components
import { Modal } from "../components/ui";
import { Input } from "../components/ui";

export const UserModal = () => {
  const { username, storeUsername } = useAppContext();
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    storeUsername(name);
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
