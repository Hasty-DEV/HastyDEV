import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.color_Form};
  border-radius: 10px;
  color: ${(props) => props.theme.colors.color};

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 2rem;
    background-color: ${(props) => props.theme.colors.color_Form};
    color: ${(props) => props.theme.colors.color};
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 10px;
    outline: none;
    background-color: ${(props) => props.theme.colors.color_Form};
    color: ${(props) => props.theme.colors.text};
    &::placeholder {
      color: ${(props) => props.theme.colors.text};
    }
  }

  input,
  select {
    width: 100%;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.color_Form};
    color: ${(props) => props.theme.colors.text};
    &::placeholder {
      color: ${(props) => props.theme.colors.text};
    }
  }

  textarea {
    width: 100%;
    resize: none;
    height: 10rem;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.color_Form};
    color: ${(props) => props.theme.colors.text};
  }

  select {
    height: 100%;
  }

  .form-input {
    position: relative;
  }

  .form-input span {
    position: absolute;
    bottom: -20px;
    left: 0;
    color: red;
    font-size: 12px;
    margin-left: 15px;
  }
`;
