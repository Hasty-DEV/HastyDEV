import styled from 'styled-components';

const StoriesContainer = styled.div`
  display: flex;
  gap: 10px;
  height: 250px;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    height: 50px;
    margin-bottom: 0;
    justify-content: space-between;
  }

  @media (min-width: 481px) and (max-width: 960px) {
    height: 150px;
    gap: 20px;
  }

  .story {
    flex: 1;
    border-radius: 10px;
    overflow: hidden;
    position: relative;

    @media (max-width: 480px) {
      flex: none;
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    span {
      position: absolute;
      bottom: 10px;
      left: 10px;
      color: white;
      font-weight: 500;

      @media (max-width: 480px) {
        display: none;
      }
    }

    button {
      position: absolute;
      bottom: 40px;
      left: 10px;
      color: white;
      background-color: #5271ff;
      border: none;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      cursor: pointer;
      font-size: 30px;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 480px) {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
      }
    }
  }
`;

export default StoriesContainer;
