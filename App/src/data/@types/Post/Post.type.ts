interface AuthorType {
    first_name: string;
    last_name: string;
}

export interface PostType {
    postid: number | string;
    userid: number | string;
    author: AuthorType;
    content: string;
    img?: string;
    updatedAt: string;
    title: string;
    subtitle: string;
    price: string;
    companyContent: string;
    categories: string;
    progammingLanguages: string;
    deadline: Date;
}