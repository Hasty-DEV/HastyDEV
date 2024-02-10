import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;

  .form-input {
    position: relative;
  }

  .form-input span {
    position: absolute;
    bottom: -20px;
    left: 0;
    color: red;
    font-size: 12px;
  }

  @media (max-width: 768px) {
    form {
      flex-direction: column-reverse;
      gap: 1rem;
    }

    input,
    select {
      width: 100%;
      height: 40px;
      padding-top: 16px;
      gap: 5px;
    }

    textarea {
      height: 100px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 2rem;
  }

  input,
  select {
    border: none;
    border-bottom: 1px solid #000;
    display: flex;
    width: 500px;
    height: 58px;
    padding-top: 24px;
    gap: 10px;

    &::placeholder {
      color: #5d5f61;
    }

    &:focus {
      outline: none;
      border-bottom-color: #000;
    }
  }

  textarea {
    padding: 10px;
    resize: none;
    &:focus {
      outline: none;
    }
  }
  @media (max-width: 768px) {
    input,
    select,
    textarea {
      width: 100%;
    }
  }
`;
