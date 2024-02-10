import  { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';
import { EmailVerificationStyled  } from '../../Ui/styles/emailVerification/emailVerification.styles';
import { api } from '../../Data/Services/api';


function EmailVerification() {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [message, setMessage] = useState('');
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
        title: 'verificação realizada com sucesso',
        showConfirmButton: false,
        timer: 1500,
      });

      navigate('/login');
    } catch (error) {
      console.error('Error verifying email:', error);
      setMessage('Error verifying email. Please try again later.');
    }
  };

  return (
    <EmailVerificationStyled>
      <div>
        <label htmlFor="verification">Insira o código enviado ao seu email</label>
        <input
          id="verification"
          type="text"
          maxLength={6}
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
      </div>
      <button className="pushable" onClick={verifyEmail}>
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front">Verificar</span>
      </button>
      <div className="message">{message}</div>
    </EmailVerificationStyled>
  );
}

export default EmailVerification;
