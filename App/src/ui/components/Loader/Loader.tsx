import { LoaderOverlay, LoaderStyled } from "../../styles/Loader/Loader.styles";

const Loader = () => {
  return (
    <LoaderOverlay className="position-fixed top-0 w-100 h-100 d-flex justify-content-center align-items-center ">
      <LoaderStyled>
        <div className="loader"></div>
      </LoaderStyled>
    </LoaderOverlay>
  );
};

export default Loader;
