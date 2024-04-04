import styled from "styled-components";

const PostContainer = styled.div`
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.38);
  border-radius: 5px;
  color: ${(props) => props.theme.colors.text};
  margin-top: 20px;
  border: 2px solid ${(props) => props.theme.colors.post_border};
  background-color:${(props) => props.theme.colors.post_background};
`;

export default PostContainer;


export const BussinessDataContainer = styled.div`
  div {
    gap: 10px;
  }
  img {
    max-width: 50px;
  }
`;

export const LikeContainer = styled.button`
  background: none;
  border: none;
  outline: none;
  gap: 10px;
`;

export const CommentContainer = styled.button`
background: none;
  border: none;
  outline: none;
  gap: 10px;
`;