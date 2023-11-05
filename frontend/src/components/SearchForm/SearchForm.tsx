import { styled } from "styled-components";

function SearchForm() {
  return (
    <SearchFormDiv>
      <form>
        <h2>Procure o Projeto Ideal</h2>
        <div className="campos">
          <label htmlFor="parceiro">Qual Parceiro Deseja Ajudar?</label>
          <select name="parceiro" id="parceiro">
            <option value="ONGS">ONGs</option>
            <option value="Empresas">Empresas</option>
            <option value="Governo">Governo</option>
          </select>

          <label htmlFor="area">Qual Sua Área de Atuação?</label>
          <input
            type="text"
            name="area"
            id="area"
            placeholder="Ex.: Front-End Developer"
          />

          <label htmlFor="remuneracao">Deseja Remuneração?</label>
          <input type="radio" name="remuneracao" id="sim" value="sim" />
          <label htmlFor="sim">Sim</label>
          <input type="radio" name="remuneracao" id="nao" value="nao" checked />
          <label htmlFor="nao">Não</label>
        </div>
        <button type="submit">Procure o Projeto</button>
      </form>
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
`;