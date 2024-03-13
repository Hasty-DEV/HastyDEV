import styled from 'styled-components';

const PostContainer = styled.div`
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  border-radius: 20px;
  background-color: #fff;
  color: #000;

  .container {
    padding: 20px;

    .user {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .userInfo {
        display: flex;
        gap: 20px;



        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
        }

        .details {
          display: flex;
          flex-direction: column;

          .name {
            font-weight: 500;
          }

          .date {
            font-size: 12px;
          }
        }
      }
    }

    .content {
      margin: 20px 0px;
      img {
        width: 100%;
        max-height: 500px;
        object-fit: cover;
        margin-top: 20px;
      }
    }

    .info {
      display: flex;
      align-items: center;
      gap: 20px;

      .item {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        font-size: 14px;
      }
    }
  }

  .title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.price {
    margin-top: -50px;
    margin-right: 20px;
   font-size: 25px;
  }

  @media screen and (max-width: 768px) {
    .price {
      margin-right: 10px;  
    }
  }

  @media screen and (max-width: 480px) {
    .title-container{
display: block;
    }
    .price{
      margin: 0;
    }
  }



`;

export default PostContainer;
