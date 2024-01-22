import styled from "styled-components";

export const rightDivSyled = styled.div`
  width: 438px;
  height: 830px;
  flex-shrink: 0;
  background:  ${(props) => props.theme.colors.background};
`;

export const LoginForm = styled.div`
  background-color:  ${(props) => props.theme.colors.background};
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  

  h2 {
    text-align: center;
    margin-top: 5%;
    margin-bottom: 54px;
    color:  ${(props) => props.theme.colors.text};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .form-group {
    margin-bottom: 15px;
    gap: 16px;
    label {
      display: block;
      margin-bottom: 16px;
      color:  ${(props) => props.theme.colors.text};
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    input {
      width: 100%;
      padding: 10px;
      border-radius: 50px;
      border: 2px solid ${(props) => props.theme.colors.secondary};
      background: ${(props) => props.theme.colors.background};
      color:  ${(props) => props.theme.colors.text};
    }
  }

  button {
    width: 100%;
    height: 34px;
    flex-shrink: 0;
    border-radius: 50px;
    background: ${(props) => props.theme.colors.secondary};
    color:  ${(props) => props.theme.colors.text};
    border: none;
    margin-top: 48px;
    margin-bottom: 48px;
  }
}

  .password-input {
    display: flex;
    align-items: center;
    position: relative;

  input {
    width: calc(100% - 38px);  // Reduz a largura para acomodar o ícone do olho
  }

  .password-toggle-icon {
    position: absolute;
    right: 10px;
    cursor: pointer;
  }
}

  .forgot-password {
    text-align: center;
    margin-top: 10px;
    a {
      font-weight: bold;
      text-decoration: none;
      color:  ${(props) => props.theme.colors.text};
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  .sign_in {
    color:  ${(props) => props.theme.colors.text};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    a {
      text-decoration: none;
      color:  ${(props) => props.theme.colors.text};
      font-weight: bold;
    }
  }

  .social-media {
    text-align: center;
    margin-top: 20px;
  }
`;

