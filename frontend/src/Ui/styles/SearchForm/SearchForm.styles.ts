import { styled } from "styled-components";
import { HeadingInterTitle } from "../../components/Texts/Texts";

export const SearchFormDiv = styled.div`
  background: #10375c;
  padding: 20px;
  form {
    width: 100%;
    margin: 0 auto;
  }

  .campos {
    margin-top: 20px;
  }

  input,
  select {
    width: 100%;
    border: none;
  }

  .form-group {
    padding: 10px;
  }

  .form-group,
  select {
    background: #0d2c4a;
    color: white;
  }

  .form-group label {
    opacity: 0.35;
  }

  select {
    &:focus {
      outline: none;
    }
  }
`;

export const SearchFormHeadingInterTitle = styled(HeadingInterTitle)`
  font-size: 2.5rem;
  color: #fff;
`;
