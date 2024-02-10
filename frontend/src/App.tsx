import GlobalStyle from "./Ui/styles/global";
import { ThemeProvider } from "styled-components";
import Pages from "./Pages/index";
import { AuthProvider } from "./Data/Contexts/Auth/AuthProvider";
import usePersisteState from "./Data/Hooks/PersisteState/usePersisteState";
import light from "./Ui/styles/themes/light";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const [theme, setTheme] = usePersisteState("themes", light);

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Pages theme={theme} setTheme={setTheme} />
      </AuthProvider>
      <GlobalStyle />
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
}

export default App;
