
import styled from 'styled-components';

// Container para o formulário
export const CreatePostContainer = styled.div`
  display: flex;
  justify-content: center; /* Centralizar horizontalmente */
  align-items: center; /* Centralizar verticalmente */
  height: 100vh;
 
`;

// Estilos para o formulário
export const Form = styled.form`
  max-width: 400px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// Estilos para grupos de campos
export const FormGroup = styled.div`
margin-bottom: 15px;  
  gap: 16px;
  position: relative;
`;

// Estilos para rótulos
export const Label = styled.label`
  display: block;
  margin-bottom: 16px;
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

// Estilos para campos de entrada de texto
export const Input = styled.input`
    width: 100%;
  padding: 10px;
  border-radius: 50px;
  border: 2px solid #000;
  background: #fff;
  color: #000;
`;

// Estilos para campos de entrada de arquivo
export const FileInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

// Estilos para áreas de texto
export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

// Estilos para botões
export const Button = styled.button`
  display: block;
  width: 100%;
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

 

