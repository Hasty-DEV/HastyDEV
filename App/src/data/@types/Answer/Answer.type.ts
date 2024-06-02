export interface Answer {
    id: string;
    userid: string;
    content: string;
    createdAt: string;
    author: {
        first_name: string;
        last_name: string;
      };
}
