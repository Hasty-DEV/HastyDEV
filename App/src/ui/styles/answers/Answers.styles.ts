import styled from "styled-components";

const AnswersContainer = styled.div`
  .write {
    margin-bottom: 20px;
  }

  input[type="text"] {
    flex: 1;
    margin-left: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    max-width: 500px;
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
    align-items: flex-start;
    margin-bottom: 20px;
    margin-top: 20px;
    margin-right: 20px;
    gap: 10px;
  }

  .answer img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .info {
    flex: 1;
  }

  .date {
    font-size: 0.8rem;
    color: #888;
    margin-top: 5px;
  }

  .answer p {
    margin: 0;
    margin-top: 5px;
    max-height: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .read-more {
    cursor: pointer;
    color: #007bff;
  }
`;

export default AnswersContainer;
