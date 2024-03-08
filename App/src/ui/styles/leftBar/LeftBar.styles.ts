import styled from "styled-components";

const LeftBarContainer = styled.div`
  flex: 2;
  position: sticky;
  top: 65px;
  height: calc(100vh - 70px);
  overflow: scroll;
  background-color: #fff;
  color: #000;
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  .container {
    padding: 20px;

    hr {
      margin: 20px 0px;
      border: none;
      height: 0.5px;
      background-color: ${({ theme }) => theme.border};
    }

    .menu {
      display: flex;
      flex-direction: column;
      gap: 20px;

      span {
        font-size: 12px;
      }

      .user {
        display: flex;
        align-items: center;
        gap: 10px;

        button {
          border: none;
          background-color: transparent;
        }

        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          object-fit: cover;
        }

        span {
          font-size: 14px;
        }
      }

      .item {
        display: flex;
        align-items: center;
        gap: 10px;

        button {
          border: none;
          background-color: transparent;
        }

        img {
          width: 30px;
        }

        span {
          font-size: 14px;
        }
      }
    }
  }
`;

export default LeftBarContainer;
