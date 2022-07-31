// Context
import { UserContextProvider } from "./contexts/UserContext";

// Styles
import Global from "./styles/global";

// Components
import { Container } from "./components/styled/Container.styled";
import { Popup } from "./components/Popup";
import { Lists } from "./components/Lists";
import { Header } from "./components/Header";

function App() {
  return (
    <UserContextProvider>
      <Container>
        <Header />
        <Lists />
      </Container>
      <Popup />

      <Global />
    </UserContextProvider>
  );
}

export default App;
