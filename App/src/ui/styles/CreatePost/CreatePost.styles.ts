import styled from "styled-components";

export const CreatePostContainer = styled.div`
  height: 100vh;
`;

export const Form = styled.form`
  max-width: 400px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  gap: 16px;
`;

export const Label = styled.label`
  margin-bottom: 16px;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 50px;
  border: 2px solid #000;
  background: #fff;
  color: #000;
`;

export const FileInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #f0ad4e;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

export const Span = styled.span`
  color: red;
  font-size: 15px;
`;
