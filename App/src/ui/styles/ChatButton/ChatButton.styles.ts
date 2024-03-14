import styled from 'styled-components';

export const StyledChatButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    &:hover {
        background-color: #0056b3;
        cursor: pointer;
    }
`;