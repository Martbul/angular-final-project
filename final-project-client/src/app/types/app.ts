export interface App {
  title: string;
  price: string;
  description: string;
  imgUrl: string;
  category: string;
  posted_at: string;
  likes: number;
  likedBy:string[];
  comments: object;
  _id: any;
  creator: any;
}
