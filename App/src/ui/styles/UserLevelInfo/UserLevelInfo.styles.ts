import styled from "styled-components";

const UserLevelInfoContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};

 .item{

  border-radius: 25px;
 box-shadow:  14px -14px 28px #0c0719,
             -14px 14px 28px #120b27;

 }

 .username{

 margin-left:6px
 

 }

 .level{

margin-top: 15px;

 }


 



`

 


  export default UserLevelInfoContainer;