import styled from "styled-components";

export const CreatePostContainer = styled.div`
  height: 100vh;
  margin-top: 8vh; 
`;

export const Form = styled.form`
  width: 80%;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  gap: 16px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 16px;
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  font-weight: 400;
`;

export const Input = styled.input`
  width: 100%;
  text-align: center;
  padding: 10px;
  border-radius: 50px;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`;

export const FileInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 18px;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  border-radius: 50px;
  box-sizing: border-box;
 padding-left:10%;
`;

export const TextArea = styled.textarea`
  width: 100%;
  text-align: center;
  padding: 10px;
  border-radius: 30px;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  overflow-y: hidden;
  height: auto;
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 30%;
`;

export const Span = styled.span`
  color: red;
  font-size: 15px;
`;
