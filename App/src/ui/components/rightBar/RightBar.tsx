import { useState } from "react";
import RightBarContainer, { Categorias, Line, TodoListContainer } from "../../styles/rightBar/RightBar.styles";
import UserLevelInfo from "../UserLevelInfo/UserLevelInfo";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";
import { FilterType } from "../../../data/@types/Filter/Filter.type";

const filtersConfig: FilterType[] = [
  { name: "Linguagens", defaultVisible: false, hasRemuneration: false, categories: ["JavaScript", "Python", "Java"] },
  { name: "Remuneração", defaultVisible: false, hasRemuneration: true, categories: ["Sim", "Não"] },
  { name: "Categoria", defaultVisible: false, hasRemuneration: false, categories: ["Frontend", "Backend", "Full Stack"] },
];

const RightBar = () => {
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