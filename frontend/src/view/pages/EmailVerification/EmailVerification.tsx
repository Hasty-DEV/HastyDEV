import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import { EmailVerificationContainer } from "../../ui/styles/emailVerification/emailVerification.styles";
import { api } from "../../../data/services/api";

function EmailVerification() {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [message, setMessage] = useState("");
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const emailFromQuery = searchParams.get("email");
    setEmail(emailFromQuery || "");
  }, [location]);

  const verifyEmail = async () => {
    try {
      const response = await api.post("/emailCodeVerification", {
        verificationCode,
        email,
      });
      setMessage(response.data.message);
      swal.fire({
        position: "center",
        icon: "success",
        title: "Verificação realizada com sucesso",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
      navigate("/login");
    }, 2000); 
    } catch (error) {
      console.error("Erro ao verificar o email:", error);
      setMessage("codigo de verificação inválido");
    }
  };

  const resendVerificationCode = async () => {
    try {
      setIsResendDisabled(true);
      await api.post("/sendEmailVerification", { email });
      setMessage("reenviado com sucesso");
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
      console.error("Erro ao reenviar o código de verificação:", error);
      setMessage(
        "Erro ao reenviar o código de verificação. Por favor, tente novamente mais tarde."
      );
    }
  };

  return (
    <EmailVerificationContainer className="d-flex flex-column align-items-center justify-content-center mx-auto">
      <div>
        <label htmlFor="verification" className="fw-bold ">
          Insira o código enviado ao seu email
        </label>
        <input
          id="verification"
          type="text"
          maxLength={6}
          placeholder="XXXXXX"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          className="text-center"
        />
        <p style={{ fontSize: "0.9rem", textAlign: "center" }}>
          O código de verificação foi enviado para: {email}
        </p>
      </div>
      <button className="pushable verify-button position-relative " onClick={verifyEmail}>
        <span className="shadow position-absolute top-0 h-100 w-100"></span>
        <span className="edge position-absolute top-0 h-100 w-100"></span>
        <span className="front d-block position-relative ">Verificar</span>
      </button>
      <button
        className="pushable resend-button text-center"
        onClick={resendVerificationCode}
        disabled={isResendDisabled}
        style={{ backgroundColor: isResendDisabled ? "#cccccc" : "#fff" }}
      >
        <span className="front">Reenviar Código de Verificação</span>
      </button>
      {isResendDisabled && (
        <div className="resend-countdown">
          Aguarde {resendCountdown} segundos antes de reenviar
        </div>
      )}
      <div className="message">{message}</div>
    </EmailVerificationContainer>
  );
}

export default EmailVerification;
