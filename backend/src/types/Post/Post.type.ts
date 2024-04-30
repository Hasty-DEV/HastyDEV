export type PostAttributes = {
    postid: number;
    userid: number;
    title: string;
    subtitle: string;
    content: string;
    isPaid: boolean;
    price?: number;
    photos: string;
    companyContent: string;
    categories: string;
    programmingLanguages: string;
    deadline: Date;
    likes: number;
    createdAt?: Date;
    updatedAt?: Date;
}