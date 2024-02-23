import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleOnLoad = () => {
      navigate("/");
    };

    handleOnLoad(); 

    return () => {
    };
  }, [navigate]);

  return null; 
};

export default CreatePost;
