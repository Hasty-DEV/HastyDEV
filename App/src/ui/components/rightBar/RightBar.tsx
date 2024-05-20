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
        </div>
      </div>
    </RightBarContainer>
  );
};

export default RightBar;