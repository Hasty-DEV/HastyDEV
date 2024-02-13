import styled from "styled-components";

export const RegisterContainer = styled.section`
  margin-top: 10%;
  @media (max-width: 1024px) {
    margin-top: 15%;
  }
  @media (max-width: 768px) {
    padding-top: 10%;
  }
`;

export const RegisterForm = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 10px;
  text-align: center;

  h2 {
    color: ${(props) => props.theme.colors.text};
  }

  .form-group {
    margin-bottom: 10px;
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
      width: 370px;
      padding: 10px;
      border-radius: 50px;
      border: 2px solid ${(props) => props.theme.colors.secondary};
      background: ${(props) => props.theme.colors.background};
      color: ${(props) => props.theme.colors.text};
    }
    span {
      position: absolute; /* Adicionado */
      bottom: -25px; /* Adicionado */
      left: 50%; /* Adicionado */
      transform: translateX(-50%); /* Adicionado */
      color: red;
      font-size: 14px;
      white-space: nowrap;
    }
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

  button {
    width: 365px;
    height: 34px;
    flex-shrink: 0;
    border-radius: 50px;
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.text};
    border: none;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .forgot-password {
    text-align: center;
    margin-top: 5px;
    a {
      font-weight: bold;
      text-decoration: none;
      color: #000;
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
