import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  height: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  position: sticky;
  top: 0;
  background-color: #fff;
  color: ${({ theme }) => theme.textColor};
  z-index: 10;

  .left {
    display: flex;
    align-items: center;
    gap: 30px;

    span {
      font-weight: bold;
      font-size: 20px;
      color: ${({ theme }) => theme.logo};
    }

    .search {
      display: flex;
      align-items: center;
      gap: 10px;
      border: 1px solid ${({ theme }) => theme.border};
      border-radius: 5px;
      padding: 5px;
      margin-right: 15px;
      input {
        border: none;
        width: 500px;
        background-color: transparent;
        color: ${({ theme }) => theme.textColor};

        @media (max-width: 768px) {
          display: none;
        }

        @media (max-width: 1024px) {
          width: 200px;
        }
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
      display: none;
    }

    .user {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 500;
      cursor: pointer;

      button{
        border: none;
        background-color: transparent;
      }

      @media (max-width: 1024px) {
        display: none;
      }

      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
  }
`;

export default NavbarContainer;
