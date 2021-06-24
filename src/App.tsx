import { EmployeeProvider } from "./hooks/useEmployees";
import {Routes} from "./routes";
import { GlobalStyle } from "./styles/globals";

function App() {
  return (
    <>
    <EmployeeProvider>
      <Routes />
      <GlobalStyle />
    </EmployeeProvider>
    </>
  );
}

export default App;
