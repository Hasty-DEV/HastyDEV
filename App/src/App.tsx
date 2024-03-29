import GlobalStyle from "./ui/styles/Global";
import Pages from "./pages";
import usePersisteState from "./data/hooks/PersisteState/usePersisteState";
import light from "./ui/theme/light";
import { ThemeProvider } from "styled-components";

const App = () => {
  const [theme, setTheme] = usePersisteState("themes", light);

  return (
    <ThemeProvider theme={theme}>
      <Pages theme={theme} setTheme={setTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
