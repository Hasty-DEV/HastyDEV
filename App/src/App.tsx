import { RouterProvider } from "react-router-dom";
import "./ui/styles/styles.scss";
import routes from "./pages";
import GlobalStyle from "./ui/styles/Global";

const App = () => {
  return (
    <div>
      <RouterProvider router={routes} />
      <GlobalStyle />
    </div>
  );
};

export default App;
