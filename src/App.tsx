// React
import { useState } from "react";

// toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Context
import { AppContextProvider } from "./contexts/AppContext";

// Styles
import Global from "./styles/global";

// Components
import { Container } from "./components/layouts";
import { Lists } from "./components/Lists";
import { Header } from "./components/Header";
import { UserModal } from "./components/UserModal";

const App = () => {
  return (
    <AppContextProvider>
      <Container>
        <Header />
        <Lists />
      </Container>

      <UserModal />
      <Global />
      <ToastContainer />
    </AppContextProvider>
  );
};

export default App;
