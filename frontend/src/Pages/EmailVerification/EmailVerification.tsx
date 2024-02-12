import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';
import { EmailVerificationStyled } from '../../Ui/styles/emailVerification/emailVerification.styles';
import { api } from '../../Data/Services/api';

function EmailVerification() {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [message, setMessage] = useState('');
  const [isResendDisabled, setIsResendDisabled] = useState(false); // Estado para controlar a desativação do botão de reenvio
  const [resendCountdown, setResendCountdown] = useState(0); // Contador de tempo para reenviar o código
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const emailFromQuery = searchParams.get('email');
    setEmail(emailFromQuery || '');
  }, [location]);

  const verifyEmail = async () => {
    try {
      const response = await api.post('/emailCodeVerification', {
        verificationCode,
        email,
      });
      setMessage(response.data.message);
      swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Verificação realizada com sucesso',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/login');
    } catch (error) {
      console.error('Erro ao verificar o email:', error);
      setMessage(
        'codigo de verificação inválido'
      );
    }
  };

  const resendVerificationCode = async () => {
    try {
      setIsResendDisabled(true);  
      await api.post('/sendEmailVerification', { email });
      setMessage('reenviado com sucesso')
      setResendCountdown(30);  
      const intervalId = setInterval(() => {
        setResendCountdown((prevCount) => {
          if (prevCount === 1) {
            clearInterval(intervalId);  
            setIsResendDisabled(false);  
          }
          return prevCount - 1;
        });
      }, 1000);
    } catch (error) {
      console.error('Erro ao reenviar o código de verificação:', error);
      setMessage(
        'Erro ao reenviar o código de verificação. Por favor, tente novamente mais tarde.'
      );
    }
  };

  return (
    <EmailVerificationStyled>
      <div>
        <label htmlFor="verification">
          Insira o código enviado ao seu email
        </label>
        <input
          id="verification"
          type="text"
          maxLength={6}
          placeholder="XXXXXX"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
      </div>
      <button className="pushable verify-button" onClick={verifyEmail}>
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front">Verificar</span>
      </button>
      <button
        className="pushable resend-button"
        onClick={resendVerificationCode}
        disabled={isResendDisabled} // Desabilita o botão de reenvio se isResendDisabled for true
        style={{ backgroundColor: isResendDisabled ? '#cccccc' : '#fff' }} // Cor de fundo do botão durante a espera
      >
        <span className="front">Reenviar Código de Verificação</span>
      </button>
      {isResendDisabled && (
        <div className="resend-countdown">
          Aguarde {resendCountdown} segundos antes de reenviar
        </div>
      )}
      <div className="message">{message}</div>
    </EmailVerificationStyled>
  );
}

export default EmailVerification;
