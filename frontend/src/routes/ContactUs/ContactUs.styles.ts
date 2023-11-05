import styled, { DefaultTheme } from "styled-components";
import {HeadingSubtitle as HS} from "../../components/Texts/Texts";

export interface ContactUsStyledProps {
  customColor?: keyof DefaultTheme["colors"];
}

export const ContactUsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0px 0px 60px 30px rgba(0, 0, 0, 0.03);
  padding-left: 0;
`;

export const FormDiv = styled.div``;

export const ContactUsInfoDiv = styled.div`
  padding-bottom: 150px;
`;

export const HeadingSubtitle = styled(HS)``;

export const ContactUsSocialIconsDiv = styled.div`
  padding: 50px;
  padding-left: 0px;
  padding-bottom: 0px;

  ul {
    list-style: none;
    display: flex;
    gap: 15px;
  }

  li {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.span};
    cursor: pointer;
    transition: 0.5s all;

    svg {
      margin-top: 2px;
    }

    &:hover {
      background: #fff;
    }
  }
`;

export const InfoDiv = styled.div`
  background: #10375c;
  border-radius: 10px;
  padding: 25px;
`;

export const Infos = styled.div<ContactUsStyledProps>`
  svg {
    fill: #fff;
  }

  p {
    margin-left: 2%;
    color: #fff;
  }
`;
