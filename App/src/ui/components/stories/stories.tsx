/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import StoriesContainer from "../../styles/stories/Stories.styles";
import { api } from "../../../data/services/api";

const stories = [
  {
    id: 1,
    name: "John Doe",
    img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: 2,
    name: "John Doe",
    img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: 3,
    name: "John Doe",
    img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: 4,
    name: "John Doe",
    img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
];

const Stories = () => {
  const [userData, setUserData] = useState<any>(null);

  const handleOnLoad = () => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      const fetchData = async () => {
        try {
          const response = await api.get(`/user/${userId}`);
          console.log(response.data);
          setUserData(response.data.user);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  };
  useEffect(handleOnLoad, []);

  return (
    <StoriesContainer onLoad={handleOnLoad}>
      <div className="story">
        <img src={stories[0].img} alt="" />
        <span>
          {userData
            ? `${userData.first_name} ${userData.last_name}`
            : "Usuário"}
        </span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </StoriesContainer>
  );
};

export default Stories;
