import { LoaderOverlay, LoaderStyled } from "../../styles/Loader/Loader.styles";

const Loader = () => {
  return (
    <LoaderOverlay>
      <LoaderStyled>
        <div className="loader"></div>
      </LoaderStyled>
    </LoaderOverlay>
  );
};

export default Loader;
