import styled from "styled-components";

export const RightBarContainer = styled.aside`
  flex: 2.4;
  position: sticky;
  top: 80px;
  height: calc(100vh - 70px);
  overflow: scroll;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  box-shadow: 0px 10px 10px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px), (max-width: 1024px) {
    display: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  .container {
    padding: 20px;
  }
`;

export const TodoListContainer = styled.div`
  margin-bottom: 15px;

  h1 {
    margin: 0;
    font-size: 25px;
    
  }

  button {
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    outline: none;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const Line = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: ${(props) => props.theme.colors.text};
`;

export const Categorias = styled.div`
  display: block;
  padding: 3%;
  margin: 0% 10% 0% 10%;
`;

export const ContainetCategory = styled.div`
  display: block;
  padding: 10px;
`;

export const ContainerFilter = styled.div`
  cursor: pointer;
`;


export const DivInput = styled.div`
  padding: 0px 0px 5px 0px;
  font-size: 18px;
  font-weight: 400;
`;
export const Input = styled.input`
  margin: 0px 10px 10px 0px;
  transform: scale(1.5);
 
`;