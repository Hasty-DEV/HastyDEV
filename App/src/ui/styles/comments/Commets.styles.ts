import styled from 'styled-components';

const CommentsContainer = styled.div`
  .comments {
    img {
      width: 40px;
      height: 40px;
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

    .comment {
      margin: 30px 0px;
      gap: 20px;

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
      }

      .date {
        flex: 1;
        align-self: center;
        color: gray;
        font-size: 12px;
      }
    }
  }
`;

export default CommentsContainer;
