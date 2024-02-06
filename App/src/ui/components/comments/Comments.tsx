import UserIcon from "../../assets/user/user_icon.png";
import CommentsContainer from "../../styles/comments/Commets.styles";

const Comments = () => {
  const comments = [
    {
      id: 1,
      desc: "Eu Consigo Fazer isso!",
      name: "Cleiton, o DEV",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Irei te chamar Cleiton!",
      name: "Jamilly, a reacter",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <CommentsContainer>
      <div className="comments">
        <div className="write">
          <img src={UserIcon} alt="" />
          <input type="text" placeholder="write a comment" />
          <button>Enviar</button>
        </div>
        {comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <img src={comment.profilePicture} alt="" />
            <div className="info">
              <span>{comment.name}</span>
              <p>{comment.desc}</p>
            </div>
            <span className="date">1 Hora Atrás</span>
          </div>
        ))}
      </div>
    </CommentsContainer>
  );
};

export default Comments;
