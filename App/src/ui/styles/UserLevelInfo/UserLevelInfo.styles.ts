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
 
    .item {
      box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
      padding: 20px;
      margin-bottom: 20px;
      background-color: ${(props) => props.theme.colors.background};
       

      span {
        color: gray;
      }

      .user {
        margin: 20px 0px;

        .userInfo {
          gap: 20px;

          img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
          }

          .online {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: limegreen;
            top: 0;
            left: 30px;
          }

          p {
            color: #000;
          }

          span {
            font-weight: 500;
            color: ${(props) => props.theme.colors.text};;
          }
        }
      }
    }
 

`

 


  export default UserLevelInfoContainer;