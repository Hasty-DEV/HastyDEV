import styled from 'styled-components';

const PerfilContainer = styled.div`
 
.card {
    width: 100%;
    height: 100vh;
    background: rgb(39, 39, 39);
    border-radius: 12px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.123);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transition-duration: .5s;
  }
  
  .profileImageContainer {
    margin-top: 40px;
    position: relative;
    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    width: 170px; /* Defina um tamanho para o contêiner */
    height: 170px; /* Defina um tamanho para o contêiner */
  }
  
  .profileImage {
    
    background: linear-gradient(to right, rgb(54, 54, 54), rgb(32, 32, 32));
    border-radius: 50%;
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.329);
    width: 100%; /* A imagem ocupará todo o espaço disponível no contêiner */
    height: 100%; /* A imagem ocupará todo o espaço disponível no contêiner */
    object-fit: cover; /* Garante que a imagem se ajuste ao tamanho do contêiner mantendo sua proporção */
  }



  //inputs
  
  .textContainer {
    width: 100%;
    text-align: center;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .name,
  .surname,
  .username {
    position: relative;
  }
  

  .name input,
  .surname input,
  .username input {
    border: none;
    border-bottom: 1px solid black;
    text-align: center;
    width: 80%; /* Definindo a largura do input em porcentagem */
    max-width: 300px; /* Defina uma largura máxima para evitar que o input fique muito grande em telas grandes */
    margin: 0 auto; /* Centraliza o input horizontalmente */
  }
  

  //botao de editar perfil

  .edit-button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgb(20, 20, 20);
    border: none;
    font-weight: 600;
    display: inline-flex;  
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
    cursor: pointer;
    transition-duration: 0.3s;
    overflow: hidden;
    position: relative;
    text-decoration: none !important;
    margin-left: 10px; 
  }
  

  
  .edit-button:hover {
    width: 120px;
    border-radius: 50px;
    transition-duration: 0.3s;
    background-color: rgb(255, 69, 69);
    align-items: center;
  }
  
  .edit-button:hover .edit-svgIcon {
    width: 20px;
    transition-duration: 0.3s;
    transform: translateY(60%);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  
  .edit-button::before {
    display: none;
    content: "Edit";
    color: white;
    transition-duration: 0.3s;
    font-size: 2px;
  }
  
  .edit-button:hover::before {
    display: block;
    padding-right: 10px;
    font-size: 13px;
    opacity: 1;
    transform: translateY(0px);
    transition-duration: 0.3s;
  }
  
  
  .card:hover {
    background-color: rgb(43, 43, 43);
    transition-duration: .5s;
  }



  .editValues path {
    fill: #fff;  
  }



  //editar foto
  
  .editIcon {
    position: absolute;
    bottom: 5px; /* Ajuste conforme necessário */
    right: 5px; /* Ajuste conforme necessário */
    background-color: #fff; /* Cor de fundo para melhorar a visibilidade */
    padding: 3px;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .editIcon:hover {
    background-color: #ccc; /* Cor de fundo ao passar o mouse */
  }

  .input {
    max-width: 190px;
    border: none;
    outline: none;
    background: none;
    font-size: 18px;
    color: #222;
    padding: 15px 5px 10px 20px;
    box-shadow: Inset 0 1px 25px rgba(0, 0, 0, 0.55);
    border-radius: 25px;
    color: #fff;
  }
  
  .input:focus {
    border: 2px solid #c3c6ce;
  }
 



  // salvar alteracoes botao
  
  .saveButton {
    padding: 13px 20px;
    border-radius: 10px;
    border: 0;
    background-color: rgb(255, 56, 86);
    font-size: 13px;
    transition: all 0.3s ease;
    box-shadow: rgb(201, 46, 70) 0px 10px 0px 0px;
    color: hsl(0, 0%, 100%);
    cursor: pointer;
  }
  
  .saveButton:hover {
    box-shadow: rgb(201, 46, 70) 0px 7px 0px 0px;
  }
  
  .saveButton:active {
    background-color: rgb(255, 56, 86);

    box-shadow: rgb(201, 46, 70) 0px 0px 0px 0px;
    transform: translateY(5px);
    transition: 200ms;
  }
  
  
`;

export default PerfilContainer;
