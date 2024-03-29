import styled from "styled-components";

export const HeaderContainer = styled.header`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  div.dropdown-menu[data-bs-popper] {
    top: 150% !important;
    right: 0 !important;
    left: -245px;
  }

  .md-person-icon {
    color:${(props) => props.theme.colors.text};  
  }


  .search-button {
    background-color: ${(props) => props.theme.colors.primary};
    border-color: ${(props) => props.theme.colors.text};  
    color: ${(props) => props.theme.colors.text};  

    
    &:hover {
      background-color: ${(props) => props.theme.colors.secondary}; // Altere para a cor desejada no hover
    }
  }
`;

export const SwitchContainer = styled.label`
  margin-left: 2%;
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 64px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #4995cfb8;
    transition: 0.4s;
    border-radius: 30px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 30px;
    width: 30px;
    border-radius: 20px;
    left: 2px;
    bottom: 2px;
    z-index: 2;
    background-color: #e8e8e8;
    transition: 0.4s;
  }

  .sun svg {
    position: absolute;
    top: 6px;
    left: 36px;
    z-index: 1;
    width: 24px;
    height: 24px;
  }

  .moon svg {
    fill: #73c0fc;
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 1;
    width: 24px;
    height: 24px;
  }

  /* .switch:hover */
  .sun svg {
    animation: rotate 15s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  /* .switch:hover */
  .moon svg {
    animation: tilt 5s linear infinite;
  }

  @keyframes tilt {
    0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(-10deg);
    }

    75% {
      transform: rotate(10deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  .input:checked + .slider {
    background-color: #1a0f39;
  }

  .input:focus + .slider {
    box-shadow: 0 0 1px #183153;
  }

  .input:checked + .slider:before {
    transform: translateX(30px);
  }
`;
