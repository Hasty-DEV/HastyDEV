import GlobalStyle from "./Ui/styles/global";
import { ThemeProvider } from "styled-components";
import Pages from "./Pages/index";
import { AuthProvider } from "./Data/Contexts/Auth/AuthProvider";
import usePersisteState from "./Data/Hooks/PersisteState/usePersisteState";
import light from "./Ui/styles/themes/light";

function App() {
  const [theme, setTheme] = usePersisteState("themes", light);

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Pages theme={theme} setTheme={setTheme} />
      </AuthProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
