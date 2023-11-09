import styled from "styled-components";

export const Container = styled.div`
    background:${props => props.theme.colors.primary};
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