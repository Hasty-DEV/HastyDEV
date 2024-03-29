import styled from "styled-components";

export const LoginContainer = styled.section`
  margin-top: 5%;

  @media (max-width: 1024px) {
    margin-top: 15%;
  }
`;

export const LoginForm = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding: 20px;
  border-radius: 10px;

  h2 {
    margin-top: 5%;
    margin-bottom: 54px;
    color: ${(props) => props.theme.colors.text};
    font-size: 16px;
    font-weight: 700;
  }

  .form-group {
    margin-bottom: 15px;
    gap: 16px;
    label {
      margin-bottom: 16px;
      color: ${(props) => props.theme.colors.text};
      font-size: 16px;
      font-weight: 400;
    }
    span {
      color: red;
      font-size: 15px;
    }
  }

  button {
    height: 34px;
    flex-shrink: 0;
    border-radius: 50px;
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.text};
    border: none;
    margin-top: 48px;
    margin-bottom: 48px;
  }

  .password-input {
    display: initial;

    .password-toggle-icon {
      right: 20px;
      cursor: pointer;
      top: 1px;
    }
  }

  .forgot-password {
    margin-top: 10px;
    a {
      font-weight: bold;
      text-decoration: none;
      color: ${(props) => props.theme.colors.text};
      font-size: 16px;
      font-weight: 400;
    }
  }

  .sign_in {
    color: ${(props) => props.theme.colors.text};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    span {
      text-decoration: none;
      color: ${(props) => props.theme.colors.text};
      font-weight: bold;
    }
  }
`;
