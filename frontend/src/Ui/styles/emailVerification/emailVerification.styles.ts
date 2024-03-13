import styled from 'styled-components';

export const EmailVerificationStyled = styled.div`
  width: 400px;
  height: 370px;
  padding: 20px;
  border-radius: 30px;
  background: ${(props) => props.theme.colors.color_emailVerification};
  box-shadow: ${(props) => props.theme.colors.box_shadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 200px;
  

  label {
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 21px;
    margin-bottom: 40px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 600;
    margin-left: 7px;
  }

  input {
    letter-spacing: 1rem;
    border: none;
    outline: none;
    background: transparent;
    text-align: center;
    font-size: 30px;
    width: 200px;
    border-bottom: 2px solid ${(props) => props.theme.colors.text};
    margin-bottom: 20px;
    margin-left: 78px;
    color: ${(props) => props.theme.colors.text}
    
  }

  input:focus {
    border-bottom-color: blue;
  }

  button.resend-button {
    /* Estilização específica para o botão de reenviar código */
    background-color: #FFFFFF;
    border: 2px solid rgb(209,213,219);
    border-radius: .5rem;
    color: #111827;
    font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: .850rem;
    font-weight: 600;
    line-height: 1.25rem;
    padding: .75rem 1rem;
    text-align: center;
    -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    cursor: pointer;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-select: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    margin-top: 15px;
  }
  
  button.resend-button:hover {
    background-color: #f9fafb;
  }
  
  button.resend-button:focus {
    outline: 2px solid rgba(0,0,0,0.1);
    outline-offset: 2px;
  }
  
  button.resend-button:focus-visible {
    -webkit-box-shadow: none;
    box-shadow: none;
  }




  button.verify-button {
    /* Estilização específica para o botão de verificar */
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    background-color: #4caf50;
    color: white;
    cursor: pointer;
    transition: filter 250ms;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    position: relative;
    background: transparent;
    padding: 0px;
    cursor: pointer;
    outline-offset: 4px;
    outline-color: deeppink;
  }

  button.verify-button .shadow {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: hsl(226, 25%, 69%);
    border-radius: 8px;
    filter: blur(2px);
    will-change: transform;
    transform: translateY(2px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  button.verify-button .edge {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 8px;
    background: ${(props) => props.theme.colors.color_button}
  }

  button.verify-button .front {
    display: block;
    position: relative;
    border-radius: 8px;
    background: ${(props) => props.theme.colors.secondary};
    padding: 16px 32px;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 1rem;
    transform: translateY(-4px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  button.verify-button:hover {
    filter: brightness(110%);
  }

  button.verify-button:hover .front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  button.verify-button:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }

  button.verify-button:hover .shadow {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  button.verify-button:active .shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }

  button.verify-button:focus:not(:focus-visible) {
    outline: none;
  }

  .message {
    font-size: 20px;
    color: #ff5733;
    margin-top: 20px;
  }
`;
