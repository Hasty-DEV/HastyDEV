import { Optional } from "sequelize";
import { PostAttributes } from "../Post/Post.type";

export interface PostCreationAttributes extends Optional<PostAttributes, "postid"> { }