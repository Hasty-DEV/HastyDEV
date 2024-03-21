import styled from "styled-components";

const ShareContainer = styled.div`
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  border-radius: 20px;
  background-color: #fff;
  color: #000;
  margin: 20px 50px;

  .container {
    padding: 20px;

    .top {
      gap: 20px;

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
      }

      input {
        border: none;
        outline: none;
        padding: 20px 10px;
        background-color: transparent;
        width: 60%;
        color: ${({ theme }) => theme.textColor};
      }
    }

    hr {
      margin: 20px 0px;
      border: none;
      height: 0.5px;
      background-color: ${({ theme }) => theme.border};
    }

    .left {
      gap: 20px;

      .item {
        gap: 10px;
        cursor: pointer;

        img {
          height: 20px;
        }

        span {
          font-size: 12px;
          color: gray;
        }
      }
    }
  }

  .right {
    button {
      border: none;
      padding: 5px;
      color: white;
      cursor: pointer;
      background-color: #5271ff;
      border-radius: 3px;
    }
  }
`;

export default ShareContainer;
