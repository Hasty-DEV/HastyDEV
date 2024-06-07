import { useState } from "react";
import { Formik, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Loader from "../../components/Loader/Loader";
import * as R from "../../styles/Register/Register.styles";
import { Container, Row, Col } from "react-bootstrap";
import RegisterImg from "../../assets/images/RegisterImg.png";
import { FormFetch } from "../../../data/services/axios/config";
import { FormValues } from "../../../data/@types/FormValues/FormValues.type";
import { validationsRegister } from "../../../data/services/Validation/ValidationRegister.service";
import { AllowEmailVerificationProps} from "../../../data/@types/AllowEmailVerification/AllowEmailVerification.type";

const Register = ({ setAllowEmailVerification }: AllowEmailVerificationProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [registrationInProgress, setRegistrationInProgress] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleTogglePassword2 = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async ({
    first_name,
    last_name,
    username,
    email,
    password,
    confirmPassword,
    role,
  }: FormValues) => {
    try {
      setRegistrationInProgress(true);
      const response = await FormFetch.post("/register", {
        first_name,
        last_name,
        username,
        email,
        password,
        confirmPassword,
        role,
      });

      const responses = await FormFetch.post("/sendEmailVerification", {
        email,
      });

      if (response && responses) {
        console.log("ok!");
      }

      swal.fire({
        position: "center",
        icon: "success",
        title: "Seu cadastro foi realizado com sucesso",
        showConfirmButton: false,
        timer: 1500,
      });
      setRegistrationSuccess(true);
      setAllowEmailVerification(true);

      setTimeout(() => {
        navigate(
          `/emailVerification${email ? `?email=${encodeURIComponent(email)}` : ""
          }`
        );
      }, 2000); 
    
    } catch (err: any) {
      setRegistrationInProgress(false);
      toast.error(err.response.data.error);
      alert(err.response.data.errors[0].msg);
      alert(err.response.data.error);
    }
  };

  return (
    <R.RegisterContainer>
      <Container>
        <Row>
          <Col sm={12} xl={6}>
            <R.RegisterForm className="text-center ">
              {registrationInProgress ? (
                <Loader />
              ) : registrationSuccess ? (
                <>
                  <h2>Cadastro realizado com sucesso!</h2>
                  <div className="sign_in">
                    <Link to="/login">
                      <span>Já Tem uma Conta? Login</span>
                    </Link>
                  </div>
                </>
              ) : (
                <Formik
                  initialValues={{
                    username: "",
                    password: "",
                    first_name: "",
                    last_name: "",
                    email: "",
                    role: "user",
                    confirmPassword: "",
                  }}
                  onSubmit={handleRegister}
                  validationSchema={validationsRegister}
                >
                  {({ errors, touched, handleSubmit, isSubmitting }) => (
                    <>
                      <form onSubmit={handleSubmit}>
                        <h2>Inscreva-se na HastyDEV!</h2>
                        <div className="form-group position-relative mb-5">
                          <label htmlFor="first_name" className="d-block">
                            Nome:
                          </label>
                          <Field
                            type="text"
                            id="first_name"
                            name="first_name"
                          />
                          <span className="position-absolute">
                            {errors.first_name &&
                              touched.first_name &&
                              errors.first_name}
                          </span>
                        </div>
                        <div className="form-group position-relative mb-5">
                          <label htmlFor="last_name" className="d-block">
                            Sobrenome:
                          </label>
                          <Field type="text" id="last_name" name="last_name" />
                          <span className="position-absolute">
                            {errors.last_name &&
                              touched.last_name &&
                              errors.last_name}
                          </span>
                        </div>
                        <div className="form-group position-relative mb-5">
                          <label htmlFor="username" className="d-block">
                            Usuário:
                          </label>
                          <Field type="text" id="username" name="username" />
                          <span className="position-absolute">
                            {errors.username &&
                              touched.username &&
                              errors.username}
                          </span>
                        </div>
                        <div className="form-group position-relative mb-5">
                          <label htmlFor="email" className="d-block">
                            E-mail:
                          </label>
                          <Field type="email" id="email" name="email" />
                          <span className="position-absolute">
                            {errors.email && touched.email && errors.email}
                          </span>
                        </div>
                        <div className="form-group position-relative mb-5">
                          <label htmlFor="role" className="d-block">Status:</label>
                          <div className="radio-input position-relative d-flex align-items-center">
                            <label className="d-block w-100 justify-content-center align-items-center">
                              <Field
                                value="user"
                                name="role"
                                id="user"
                                type="radio"
                                className="d-none"
                              />
                              <p>Usuário</p>
                            </label>
                            <label className="d-block w-100 justify-content-center align-items-center">
                              <Field
                                value="business"
                                name="role"
                                id="business"
                                type="radio"
                                className="d-none"
                              />
                              <p>Empresa</p>
                            </label>
                            <div className="selection"></div>
                          </div>
                          <span className="position-absolute">
                            {errors.role && touched.role && errors.role}
                          </span>
                        </div>

                        <div className="form-group position-relative mb-5">
                          <label htmlFor="password" className="d-block">
                            Senha:
                          </label>
                          <div className="password-input align-items-center position-relative ">
                            <Field
                              type={showPassword ? "text" : "password"}
                              id="password"
                              name="password"
                            />
                            <FontAwesomeIcon
                              icon={showPassword ? faEyeSlash : faEye}
                              onClick={handleTogglePassword}
                              className="password-toggle-icon position-absolute "
                            />
                          </div>
                          <span className="position-absolute">
                            {errors.password &&
                              touched.password &&
                              errors.password}
                          </span>
                        </div>
                        <div className="form-group position-relative mb-5">
                          <label htmlFor="confirmPassword" className="d-block">
                            Confirme Sua Senha:
                          </label>
                          <div className="password-input align-items-center position-relative ">
                            <Field
                              type={showPassword ? "text" : "password"}
                              id="confirmPassword"
                              name="confirmPassword"
                            />
                            <FontAwesomeIcon
                              icon={showPassword ? faEyeSlash : faEye}
                              onClick={handleTogglePassword2}
                              className="password-toggle-icon position-absolute"
                            />
                          </div>
                          <span className="position-absolute">
                            {errors.confirmPassword &&
                              touched.confirmPassword &&
                              errors.confirmPassword}
                          </span>
                        </div>

                        <div className="form-group position-relative">
                          <button type="submit" disabled={isSubmitting}>
                            Inscreva-se
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </Formik>
              )}
            </R.RegisterForm>
          </Col>
          <Col sm={12} xl={6}>
            <img src={RegisterImg} alt="" className="img-fluid" />
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </R.RegisterContainer>
  );
};

export default Register;
