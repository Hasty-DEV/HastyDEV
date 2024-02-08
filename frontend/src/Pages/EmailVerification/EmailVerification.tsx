import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FormFetch } from "../../Data/Services/axios/config";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

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
      const response = await FormFetch.post('/emailVerification', { verificationCode, email });
      setMessage(response.data.message);
      swal.fire({
        position: "center",
        icon: "success",
        title: "Sua verificação realizada com sucesso",
        showConfirmButton: false,
        timer: 1500,
      });
 
navigate("/login")
    } catch (error) {
      console.error('Error verifying email:', error);
      setMessage('Error verifying email. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Email Verification</h1>
      <h1>oiiiiiiiiiiiii</h1>
      <div>
        <label>Email:</label>
       
      </div>

      <div>
        <label>Verification Code:</label>
        <input type="text" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
      </div>
      <button onClick={verifyEmail}>Verify Email</button>
      <div>{message}</div>
    </div>
  );
}

export default EmailVerification;
