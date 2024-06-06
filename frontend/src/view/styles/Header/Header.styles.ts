import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.colors.primary};
  z-index: 1000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ButtonsHeader = styled.div`
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    hr {
      display: block;
    }
  }
`;