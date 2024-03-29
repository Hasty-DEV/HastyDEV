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

  h2 {
    color: ${(props) => props.theme.colors.text};
  }

  .form-group {
    margin-bottom: 10px;
    label {
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
      border-radius: 50px;
      border: 2px solid ${(props) => props.theme.colors.secondary};
      background-color: ${(props) => props.theme.colors.background};
      color: ${(props) => props.theme.colors.text};
      height: 50px;
      width: 370px;
      overflow: hidden;
      margin: 0 auto;
    }

    .radio-input label {
      padding: 10px;
      cursor: pointer;
      z-index: 1;
      font-weight: 400;
      font-size: 14px;
    }

    .radio-input p {
      margin-top: 30px;
    }

    .selection {
      width: calc(var(--container_width) / 2);
      z-index: 0;
      left: 0;
      transition: 0.15s ease;
    }

    .radio-input label:has(input:checked) {
      color: #fff;
    }

    .radio-input label:has(input:checked) ~ .selection {
      background-color: ${(props) => props.theme.colors.secondary};
      display: inline-block;
    }

    .radio-input label:nth-child(1):has(input:checked) ~ .selection {
      transform: translateX(calc(var(--container_width) * 0 / 2));
    }

    .radio-input label:nth-child(2):has(input:checked) ~ .selection {
      transform: translateX(calc(var(--container_width) * 1 / 2));
    }
  }

  .password-input {
    display: initial;

    .password-toggle-icon {
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
`;
