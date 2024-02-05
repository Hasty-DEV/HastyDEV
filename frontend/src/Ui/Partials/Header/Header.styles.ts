import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

export const ButtonsHeader = styled.div`
  hr {
    display: none;
  }

  @media (max-width: 991px) {
    flex-direction: column;
    hr {
      display: block;
    }
  }
`;