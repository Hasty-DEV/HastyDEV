import styled from "styled-components";

export const CreatePostContainer = styled.div`
  height: 100vh;
 
`;

export const Form = styled.form`
  width: 80%;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.background} ;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
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
  background-color:${(props) => props.theme.colors.secondary};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 30%
`;

export const Span = styled.span`
  color: red;
  font-size: 15px;
`;
