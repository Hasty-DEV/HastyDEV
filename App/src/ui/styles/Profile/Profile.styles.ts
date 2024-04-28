import styled from "styled-components";

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  .card {
    height: 100%;
    background: ${(props) => props.theme.colors.background};
    border: none;
  }

  .profileImageContainer {
    margin-top: 10px;
    width: 170px;
    height: 170px;
    margin-bottom: 35px;
  }

  .profileImage {
    border-radius: 50%;
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.329);
    object-fit: cover;
  }

  .social-links {
    margin-bottom: 20px;
  }

  .social-links a {
    margin-right: 10px;
    color: #333;
    font-size: 24px;
  }

  .about-me, .contacts {
    background: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  .about-me h2, .contacts h2 {
    margin-bottom: 10px;
  }

  .about-me p, .contacts p {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    .profileImageContainer {
      width: 120px;
      height: 120px;
    }

    .profileImage {
      width: 100%;
      height: 100%;
    }

    .social-links a {
      font-size: 20px;
    }
  }
`;
export default ProfileContainer;
