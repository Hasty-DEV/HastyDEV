import styled from "styled-components";

export const TableContainer = styled.div`
  .tabela-transparente {
    border-collapse: collapse;
    width: 100%;
  }

  .tabela-transparente td,
  .tabela-transparente tr {
    padding: 8px;
  }

  td {
    width: 50%;
  }

  .tabela-transparente td:first-child {
    text-align: left;
  }

  @media (max-width: 768px) {
    .tabela-transparente td {
      display: block;
      width: 100%;
    }

    .tabela-transparente td:first-child {
      text-align: left;
    }

    .tabela-transparente tr {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .tabela .HeadingSubInterTitle {
    text-align: center;
    margin-bottom: 5px;
  }
`;
