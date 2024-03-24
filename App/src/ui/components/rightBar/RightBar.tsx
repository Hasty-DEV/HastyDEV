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
          <div className="item">
            <span>Últimas Atividades</span>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <p>
                  <span>Jane Doe</span> Mudou a foto dele
                </p>
              </div>
              <span>1 min atrás</span>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <p>
                  <span>Jane Doe</span> Mudou a foto dele
                </p>
              </div>
              <span>1 min atrás</span>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <p>
                  <span>Jane Doe</span> Mudou a foto dele
                </p>
              </div>
              <span>1 min atrás</span>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <p>
                  <span>Jane Doe</span> Mudou a foto dele
                </p>
              </div>
              <span>1 min atrás</span>
            </div>
          </div>
          <div className="item">
            <span>DEVS Online</span>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="online" />
                <span>Jane Doe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RightBarContainer>
  );
};

export default RightBar;

const TodoListContainer = styled.div`
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

const Line = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: #000;
`;
