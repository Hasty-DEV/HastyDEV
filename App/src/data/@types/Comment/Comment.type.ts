export interface CommentType {
    id: string;
    userid: string;
    content: string;
    createdAt: string;
    commentid: number | string;
    author: {
      first_name: string;
      last_name: string;
    };
  }
  