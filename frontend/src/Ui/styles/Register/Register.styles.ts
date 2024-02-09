import styled from "styled-components";

export const rightDivSyled = styled.div`
  width: 438px;
  height: 830px;
  flex-shrink: 0;
  background: ${(props) => props.theme.colors.secondary};
`;

export const RegisterForm = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  margin-top: 20%;
  

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
    margin-bottom: 10px;
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
      color:  ${(props) => props.theme.colors.text};
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

