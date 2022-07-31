import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";

interface UserProviderProps {
  children: React.ReactNode;
}

export type User = {
  username?: string;
  setUsername?: (name: string) => void;
};

const UserContext = createContext<User>({});

export const UserContextProvider = ({ children }: UserProviderProps) => {
  const [username, setUsername] = useState<string>("");

  // Local Storage: setting & getting data
  useEffect(() => {
    const localUsername = JSON.parse(localStorage.getItem("name") || "null");

    if (localUsername) {
      setUsername(localUsername);
    }
  }, []);

  useEffect(() => {
    if (username) {
      localStorage.setItem("name", JSON.stringify(username));
    }
  }, [username]);

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
