import { useState } from "react";

import UserLevelInfo from "../UserLevelInfo/UserLevelInfo";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";
import { FilterType } from "../../../data/@types/Filter/Filter.type";
import { Categorias, ContainerFilter, DivInput, Input, Line, RightBarContainer, TodoListContainer } from "../../styles/rightBar/RightBar.styles";

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
                <ContainerFilter className="col d-flex justify-content-between align-items-center " onClick={() => toggleFilterVisibility(filterIndex)}>
                  <h1 className="m-0">
                    <button className="w-100">
                      {filter.name}
                    </button>
                  </h1>
                  <div className="col-3 text-right">
                    {filterVisibility[filterIndex] && <SlArrowDown />}
                    {!filterVisibility[filterIndex] && <SlArrowRight />}
                  </div>
                </ContainerFilter>

                {filterVisibility[filterIndex] && (
                  <Categorias>
                    {filter.categories.map((category, categoryIndex) => (
                      <DivInput>
                        <label key={categoryIndex}>
                          <Input type="checkbox"  />
                          {category}
                        </label>

                      </DivInput>
                    ))}
                  </Categorias>
                )}
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