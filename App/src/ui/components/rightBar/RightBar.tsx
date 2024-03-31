import { useState } from "react";
import RightBarContainer from "../../styles/rightBar/RightBar.styles";
import UserLevelInfo from "../UserLevelInfo/UserLevelInfo";
import styled from 'styled-components';
import { SlArrowDown, SlArrowRight } from "react-icons/sl";

interface Filter {
  name: string;
  defaultVisible: boolean;
  hasRemuneration: boolean;
  categories: string[];
}

const filtersConfig: Filter[] = [
  { name: "Linguagens", defaultVisible: false, hasRemuneration: false, categories: ["JavaScript", "Python", "Java"] },
  { name: "Remuneração", defaultVisible: false, hasRemuneration: true, categories: ["Sim", "Não"] },
  { name: "Categoria", defaultVisible: false, hasRemuneration: false, categories: ["Frontend", "Backend", "Full Stack"] },
];

const RightBar: React.FC = () => {
  const [filterVisibility, setFilterVisibility] = useState<boolean[]>(filtersConfig.map(filter => filter.defaultVisible));

  const toggleFilterVisibility = (index: number) => {
    const newFilterVisibility = [...filterVisibility];
    newFilterVisibility[index] = !newFilterVisibility[index];
    setFilterVisibility(newFilterVisibility);
  };




  return (
    <RightBarContainer>
  <div className="rightBar">
    <div className="container">
      <UserLevelInfo />
      {filtersConfig.map((filter, filterIndex) => (
        <TodoListContainer key={filterIndex}>
          <div className="row align-items-center">
            <div className="col">
              <h1>
                <button onClick={() => toggleFilterVisibility(filterIndex)}>{filter.name}</button>
              </h1>
            </div>

            
              {filterVisibility[filterIndex] && (
                <Categorias>
                  {filter.categories.map((category, categoryIndex) => (

                      <div>
                    <label key={categoryIndex}>
                      <input type="checkbox" className="checkbox-style" />
                      
                      {category}
                    </label>
                    </div>


                  ))}
                </Categorias>
              )}
            

            <div className="col-3 text-right align-self-center">
              {filterVisibility[filterIndex] && <SlArrowDown />}
                {!filterVisibility[filterIndex] && <SlArrowRight />}
            </div>
          </div>
          <Line />
        </TodoListContainer>
      ))}
    </div>
  </div>
</RightBarContainer>

  

  );
};

export default RightBar;



export const TodoListContainer = styled.div`
  margin-bottom: 10px;

  h1 {
    margin: 0;
    font-size: 20px;
  }

  button {
    background-color: #fff;
    color: #000;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    outline: none;
  }
`;

export const Line = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: #000;
`;

export const Categorias = styled.div`
display:block;
padding:10px;
margin: 0% 10% 0% 10%;
`;

export const ContainetCategory = styled.div`

display:block;
padding: 10px;
`;
