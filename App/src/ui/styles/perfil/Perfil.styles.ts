import styled from "styled-components";

const PerfilContainer = styled.div`
  .card {
    height: 100%;
    background: ${(props) => props.theme.colors.background};
   border: none;
    margin: 20px;
  }

  .profileImageContainer {
    margin-top: 10px;
    width: 170px;
    height: 170px;
    margin-bottom: 35px;
  }

  .profileImage {
     border-radius: 50%;
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.329);
    object-fit: cover;
  }
  .textContainer {
    padding: 20px;
    gap: 10px;
  }

  .cancelButton {
    margin-top:20px;
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cancelButton:hover {
  background-color: #c82333;
}

 

  .edit-button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.background};
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition-duration: 0.3s;
    overflow: hidden;
    text-decoration: none !important;
    margin-left: 10px;
  }

  .edit-button:hover {
   width: 120px;
   box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
    border-radius: 50px;
    transition-duration: 0.3s;
    background-color:  ${(props) => props.theme.colors.secondary};
  }

  
 
  .edit-button::before {
    display: none;
    content: "Edit";
    color: ${(props) => props.theme.colors.text};
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

  
  .editValues path {
    fill: ${(props) => props.theme.colors.text};
  }

  .editIcon {
    bottom: 5px;
    right: 5px;
    background-color: ${(props) => props.theme.colors.text};
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;
    position: absolute;
    width: 15px;
    height: 15px;
  }

  .editIcon path{
  fill: ${(props) => props.theme.colors.primary}; 
  }

  .form-group {
    margin-bottom: 15px;
    gap: 16px;
    text-align: center;

    label {
      display: block;
      margin-bottom: 16px;
      color: ${(props) => props.theme.colors.text};
      font-size: 16px;
      font-weight: 400;
    }
    input {
      width: 100%;
      text-align: center;
      padding: 10px;
      border-radius: 50px;
      border: 2px solid ${(props) => props.theme.colors.secondary};
      background: ${(props) => props.theme.colors.background};
      color: ${(props) => props.theme.colors.text};
    }
  }

  .saveButton {
  margin-top: 20px;
  padding: 10px 20px;
  background-color:${(props) => props.theme.colors.secondary};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 30%
}

.toggleSocialEditButton{

  margin-top: 20px;
  padding: 10px 20px;
  background-color:${(props) => props.theme.colors.secondary};
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 30%


}
  
`;

export default PerfilContainer;
