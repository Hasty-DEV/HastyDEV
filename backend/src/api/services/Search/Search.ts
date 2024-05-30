import { Op } from "sequelize";
import Post from "../../models/Posts/Posts.model";
import User from "../../models/User/User.model";

const searchItems = async (searchTerm: string) => {
  try {
    const posts = await Post.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${searchTerm}%` } },
          { subtitle: { [Op.like]: `%${searchTerm}%` } },
          { content: { [Op.like]: `%${searchTerm}%` } },
          { companyContent: { [Op.like]: `%${searchTerm}%` } },
          { categories: { [Op.like]: `%${searchTerm}%` } },
          { programmingLanguages: { [Op.like]: `%${searchTerm}%` } },
        ],
      },
      include: {
        model: User,
        as: 'author',
        attributes: ["first_name", "last_name"],
      },
    });

    const formattedPosts = posts.map(post => ({
      postid: post.postid,
      userid: post.userid,
      title: post.title,
      subtitle: post.subtitle,
      content: post.content,
      isPaid: post.isPaid,
      price: post.price,
      photos: post.photos || "",
      companyContent: post.companyContent,
      categories: post.categories,
      programmingLanguages: post.programmingLanguages,
      deadline: post.deadline,
      likes: post.likes,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
      author: post.author ? {
        first_name: post.author.first_name,
        last_name: post.author.last_name
      } : null
    }));

    return formattedPosts;
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    throw error;
  }
};

export default { searchItems };
