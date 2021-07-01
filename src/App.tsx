import { CharacterProvider } from "./hooks/useCharacter";
import {Routes} from "./routes";
import { GlobalStyle } from "./styles/globals";

function App() {
  return (
    <>
    <CharacterProvider>
      <Routes />
      <GlobalStyle />
    </CharacterProvider>
    </>
  );
}

export default App;
