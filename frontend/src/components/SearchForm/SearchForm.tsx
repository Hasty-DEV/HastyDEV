import { Formik } from "formik";
import { styled } from "styled-components";
import * as yup from "yup";
import { FormFetch } from "../../axios/config";
import { ButtonPrimaryLongNoLink } from "../Buttons/Buttons";

interface SearchFormValues {
  Partner: string;
  WorkArea: string;
  wantMoney: string;
}

const validationsSearch = yup.object().shape({
  Name: yup.string().required("O campo de nome é obrigatório"),
});

function SearchForm() {
  const handleSearch = async ({
    Partner,
    WorkArea,
    wantMoney,
  }: SearchFormValues) => {
    try {
      const response = await FormFetch.post("/searchForm", {
        Partner,
        WorkArea,
        wantMoney,
      });
      console.log(response.data);
    } catch (err) {
      alert(err);
    }
  };
  return (
    <SearchFormDiv>
      <Formik
        initialValues={{
          Partner: "",
          WorkArea: "",
          wantMoney: "",
        }}
        onSubmit={handleSearch}
        validationSchema={validationsSearch}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="Partner">Qual Parceiro Deseja Ajudar?</label>
                <select
                  title="Partner"
                  id="Partner"
                  name="Partner"
                  value={values.Partner}
                  onChange={(e) => setFieldValue("Partner", e.target.value)}
                  className="mt-3"
                >
                  <option value="">Selecione uma Categoria</option>
                  <option value="ONGs">ONGs</option>
                  <option value="MEIs">MEIs</option>
                </select>
                {errors.Partner && touched.Partner && errors.Partner}
              </div>
              <div className="form-group">
                <label htmlFor="WorkArea">Qual Sua Área de Atuação?</label>
                <select
                  title="WorkArea"
                  id="WorkArea"
                  name="WorkArea"
                  value={values.WorkArea}
                  onChange={(e) => setFieldValue("WorkArea", e.target.value)}
                  className="mt-3"
                >
                  <option value="">Selecione uma Categoria</option>
                  <option value="Front-End">Front-End</option>
                  <option value="Back-End">Back-End</option>
                  <option value="Devops">Devops</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Web Design">Web Design</option>
                  <option value="Desktop">Desktop</option>
                </select>
                {errors.WorkArea && touched.WorkArea && errors.WorkArea}
              </div>
              <div className="form-group">
                <label htmlFor="wantMoney">Deseja Remuneração?</label>
                <select
                  title="wantMoney"
                  id="wantMoney"
                  name="wantMoney"
                  value={values.wantMoney}
                  onChange={(e) => setFieldValue("wantMoney", e.target.value)}
                  className="mt-3"
                >
                  <option value="">Selecione uma Categoria</option>
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                </select>
                {errors.wantMoney && touched.wantMoney && errors.wantMoney}
              </div>
              <ButtonPrimaryLongNoLink
                type="submit"
                buttonText="Procure o Projeto"
                disabled={isSubmitting}
                className="mt-4"
              />
            </form>
          </>
        )}
      </Formik>
    </SearchFormDiv>
  );
}

export default SearchForm;

const SearchFormDiv = styled.div`
  form {
    width: 500px;
    margin: 0 auto;
  }

  h2 {
    text-align: center;
  }

  .campos {
    margin-top: 20px;
  }

  label {
    font-weight: bold;
  }

  input,
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
  }

  input[type="radio"] {
    margin-right: 10px;
  }

  button {
    background-color: #000;
    color: #fff;
    padding: 10px;
    border: none;
    cursor: pointer;
  }

  .form-group {
    label {
        margin-bottom: -100px;
    }
  }
`;
