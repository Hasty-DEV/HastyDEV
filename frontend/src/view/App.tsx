import GlobalStyle from "./styles/global";
import Pages from "./pages/index";
import usePersisteState from "../data/hooks/PersisteState/usePersisteState";
import light from "./themes/light";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "../data/contexts/Auth/AuthProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  const [theme, setTheme] = usePersisteState("themes", light);

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Pages theme={theme} setTheme={setTheme} />
        </AuthProvider>
        <GlobalStyle />
      </ThemeProvider>
      <Analytics />
      <SpeedInsights />
    </>
  );
};

export default App;
