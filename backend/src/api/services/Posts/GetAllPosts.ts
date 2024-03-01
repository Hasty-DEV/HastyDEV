import Post from "../../models/Posts/Posts.model";
import User from "../../models/User/User.model";

export const getAllPostsService = async (): Promise<any[]> => {
  const posts = await Post.findAll({
    include: {
      model: User,
      as: "author",
      attributes: ["first_name", "last_name"],
    },
  });
  return posts;
};
