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
      font-size: 16px;
      font-weight: 400;
    }
    input {
      height: 50px;
      width: 370px;
      padding: 10px;
      border-radius: 50px;
      border: 2px solid ${(props) => props.theme.colors.secondary};
      background: ${(props) => props.theme.colors.background};
      color: ${(props) => props.theme.colors.text};
 
    }
    span {
      position: absolute;
      bottom: -25px;
      left: 50%;
      transform: translateX(-50%); 
      color: red;
      font-size: 14px;
      white-space: nowrap;
    }

.radio-input input {
  display: none;
}

.radio-input {
  --container_width: 370px;
  position: relative;
  border-radius: 50px;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  height: 50px;
  width: 370px;
  overflow: hidden;

  margin: 0 auto;
 
 
}

.radio-input label {
  width: 100%;
  padding: 10px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  z-index: 1;
  font-weight: 400;
  font-size: 14px;
}


.radio-input p{
margin-top: 30px;
}


.selection {
  display: none;
  position: absolute;
  height: 100%;
  width: calc(var(--container_width) / 2);
  z-index: 0;
  left: 0;
  top: 0;
  transition: .15s ease;
}

.radio-input label:has(input:checked) {
  color: #fff;
}

.radio-input label:has(input:checked) ~ .selection {
  background-color: ${(props) => props.theme.colors.secondary} ;
  display: inline-block;
}

.radio-input label:nth-child(1):has(input:checked) ~ .selection {
  transform: translateX(calc(var(--container_width) * 0/2));
}

.radio-input label:nth-child(2):has(input:checked) ~ .selection {
  transform: translateX(calc(var(--container_width) * 1/2));
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
      font-size: 16px;
      font-weight: 400;
    }
  }

  .sign_in {
    color: ${(props) => props.theme.colors.text};
    font-size: 16px;
    font-weight: 400;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.text};
      font-weight: bold;
    }
  }

  .social-media {
    text-align: center;
  }

  
`;
