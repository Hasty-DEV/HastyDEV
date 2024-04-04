export interface PostAttributes {
    postid: number;
    userid: number;
    title: string;
    subtitle: string;
    isPaid: boolean;
    price?: number;
    photos: string;
    companyContent: string;
    categories: string;
    programmingLanguages: string;
    deadline: Date;
    createdAt?: Date;
    updatedAt?: Date;
}