import styled from "styled-components";

export const HeaderContainer = styled.header`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  div.dropdown-menu[data-bs-popper] {
    top: 150% !important;
    right: 0 !important;
    left: -245px;
  }
`;
