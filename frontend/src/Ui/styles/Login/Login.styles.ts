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
  text-align: center;

  h2 {
    text-align: center;
    margin-top: 5%;
    margin-bottom: 54px;
    color: ${(props) => props.theme.colors.text};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .form-group {
    margin-bottom: 15px;
    gap: 16px;
    position: relative;
    label {
      display: block;
      margin-bottom: 16px;
      color: ${(props) => props.theme.colors.text};
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
      color: ${(props) => props.theme.colors.text};
    }
    span {
      color: red;
      font-size: 15px;
    
    }
  }

  button {
    width: 100%;
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
    align-items: center;
    position: relative;

    .password-toggle-icon {
      position: absolute;
      right: 20px;
      cursor: pointer;
      top: 1px;
    }
  }

  .forgot-password {
    text-align: center;
    margin-top: 10px;
    a {
      font-weight: bold;
      text-decoration: none;
      color: ${(props) => props.theme.colors.text};
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  .sign_in {
    color: ${(props) => props.theme.colors.text};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.text};
      font-weight: bold;
    }
  }

  .social-media {
    text-align: center;
    margin-top: 20px;
  }
`;
