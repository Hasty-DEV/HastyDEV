import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.color_Form};
  border-radius: 10px;
  color: ${(props) => props.theme.colors.color} form {
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
    padding: 1rem;
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
`;
