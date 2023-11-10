import { styled } from "styled-components";

const Loader = () => {
  return (
    <LoaderOverlay>
      <LoaderStyled>
        <div className="loader-inner"></div>
      </LoaderStyled>
    </LoaderOverlay>
  );
};

export default Loader;

const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; 
  backdrop-filter: blur(5px); 
`;

const LoaderStyled = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7); 
  animation: rotation 1s linear infinite;

  .loader-inner {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border-top: 4px solid #fff;
    border-right: 4px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite reverse;

    &:after {
      content: "";
      box-sizing: border-box;
      position: absolute;
      left: 0;
      top: 0;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border-left: 4px solid #ff3d00;
      border-bottom: 4px solid transparent;
      animation: rotation 0.5s linear infinite;
    }
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
