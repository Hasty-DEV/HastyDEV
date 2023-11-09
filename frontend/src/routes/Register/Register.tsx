import * as R from "./Register.styles";
import * as yup from "yup";
import { Container, Row, Col } from "react-bootstrap";
import RegisterImg from "../../assets/images/RegisterImg.png";
import { FormFetch } from "../../axios/config";
import { Formik, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import swal  from 'sweetalert2';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


interface FormValues {
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
  confirmPassword: string;
}
const validationsRegister = yup.object().shape({
  first_name: yup.string().required("O campo de nome é obrigatório"),
  last_name: yup.string().required("O campo de sobrenome é obrigatório"),
  username: yup.string().required("O campo de nome de usuário é obrigatório").min(5, "O username deve ter pelo menos 5 caracteres"),
  email: yup.string().email("Email inválido").required("O email é obrigatório"),
  password: yup.string()
    .required("A senha é obrigatória")
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .matches(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
    .matches(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
    .matches(/[0-9]/, "A senha deve conter pelo menos um número")
    .matches(/[@$!¨%*#?&]/, "A senha deve conter pelo menos um caractere especial"),
    confirmPassword: yup.string().required("A confirmação da senha é obrigatória").oneOf([yup.ref("password")], "As senhas não coincidem"),
});

const Register: React.FC = () => {

  
  const navigate = useNavigate(); 
  const handleRegister = async ({ first_name, last_name, username, email, password, confirmPassword }: FormValues) => {
    try {
      const response = await FormFetch.post("/register", { first_name, last_name, username, email, password, confirmPassword })
      console.log(response.data);
 
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Seu cadastro foi realizado com sucesso',
          showConfirmButton: false,
          timer: 1500,
        });
      
    
      navigate('/login');
 
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.response.data.error);
      alert(err.response.data.errors[0].msg);
      alert(err.response.data.error);
    }

  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <img
            src={RegisterImg}
            alt=""
            height="auto"
            width="90%"
          />
        </Col>
        <Col>
          <R.RegisterForm>
            <Formik
              initialValues={{
                username: "",
                password: "",
                first_name: "",
                last_name: "",
                email: "",
                confirmPassword: "",
              }}
              onSubmit={handleRegister}
              validationSchema={validationsRegister}
            >
              {({ errors, touched, handleSubmit, isSubmitting }) => (
                <>
                  <form onSubmit={handleSubmit}>
                    <h2>Inscreva-se na HastyDEV!</h2>
                    <div className="form-group">
                      <label htmlFor="first_name">Nome:</label>
                      <Field type="text" id="first_name" name="first_name" />
                      {errors.first_name && touched.first_name && errors.first_name}
                    </div>
                    <div className="form-group">
                      <label htmlFor="last_name">Sobrenome:</label>
                      <Field type="text" id="last_name" name="last_name" />
                      {errors.last_name && touched.last_name && errors.last_name}
                    </div>
                    <div className="form-group">
                      <label htmlFor="username">Usuário:</label>
                      <Field type="text" id="username" name="username" />
                      {errors.username && touched.username && errors.username}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">E-mail:</label>
                      <Field type="email" id="email" name="email" />
                      {errors.email && touched.email && errors.email}
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Senha:</label>
                      <Field type="password" id="password" name="password" />
                      {errors.password && touched.password && errors.password}
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirmPassword">
                        Confirme Sua Senha:
                      </label>
                      <Field
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                      />
                      {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                    </div>
                    
                    <div className="form-group">
                      <button type="submit" disabled={isSubmitting}>Inscreva-se</button>
                    </div>
                  </form>
                  <div className="sign_in">
                    <Link to="/login"  >
                      <a>Já Tem uma Conta? Login</a>
                    </Link>
                  </div>

                </>
              )}
            </Formik>
          </R.RegisterForm>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default Register;
