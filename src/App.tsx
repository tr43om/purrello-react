// toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Styles
import Global from "./styles/global";

// Components
import { Container } from "./components/layouts/Container";
import { Lists } from "./components/Lists";
import { Header } from "./components/Header";
import { UserModal } from "./components/UserModal";

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Lists />
      </Container>

      <UserModal />
      <Global />
      <ToastContainer />
    </>
  );
};

export default App;
