import styled from 'styled-components';

const CommentsContainer = styled.div`
  margin-top: 20px;

  .comments {
    .comment {
      background-color: #f9f9f9;
      border-radius: 10px;
      padding: 15px;
      margin-bottom: 20px;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }

    .write {
      gap: 20px;
      margin: 20px 0px;

      input {
        flex: 5;
        padding: 10px;
        border: 1px solid ${({ theme }) => theme.border};
        background-color: transparent;
        color: ${({ theme }) => theme.textColor};
        max-width: 500px;
      }

      button {
        border: none;
        background-color: #5271ff;
        color: white;
        padding: 10px;
        cursor: pointer;
        border-radius: 3px;
      }
    }

    .info {
      flex: 5;
      gap: 3px;
      align-items: flex-start;

      span {
        font-weight: 500;
      }

      p {
        color: ${({ theme }) => theme.textColorSoft};
      }

      .date {
        color: gray;
        font-size: 0.8rem;
        margin-top: 5px;
      }

      .read-more {
        cursor: pointer;
        color: ${({ theme }) => theme.primary};
      }
    }

    .item {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
      color: ${({ theme }) => theme.textColorSoft};
    }
  }
`;

export default CommentsContainer;
