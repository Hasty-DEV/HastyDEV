// Answers.styles.ts
import styled from "styled-components";

const AnswersContainer = styled.div`
.answers {
  .write {
    display: flex;
    align-items: center;
    margin-bottom: 20px; /* Adicione um espaço entre o input de resposta e os comentários */
  }

  input[type="text"] {
    flex: 1;
    margin-left: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  button {
    margin-left: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }

  .answer {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
  }

  .answer img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .info {
    flex: 1;
  }

  .date {
    font-size: 0.8rem;
    color: #888;
  }

  .answer p {
    margin: 0;
    margin-top: 5px;
  }
}
`;

export default AnswersContainer;
