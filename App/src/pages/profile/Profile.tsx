import "./profile.scss";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPinterest } from 'react-icons/fa';
import { MdPlace, MdLanguage, MdEmail, MdMoreVert } from 'react-icons/md';

import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FaFacebook size={40} />
            </a>
            <a href="http://instagram.com">
              <FaInstagram size={40} />
            </a>
            <a href="http://twitter.com">
              <FaTwitter size={40} />
            </a>
            <a href="http://linkedin.com">
              <FaLinkedin size={40} />
            </a>
            <a href="http://pinterest.com">
              <FaPinterest size={40} />
            </a>
          </div>
          <div className="center">
            <span>Jane Doe</span>
            <div className="info">
              <div className="item">
                <MdPlace size={40} />
                <span>USA</span>
              </div>
              <div className="item">
                <MdLanguage size={40} />
                <span>lama.dev</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <MdEmail size={40} />
            <MdMoreVert size={40} />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
