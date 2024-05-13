export type Comment = {
  author: string;
  likes: number;
  profilePic: string;
  text: string
}

export type ContentCardType = {
  comments: Comment[];
  id: string;
  imageUri: string;
  body: string;
  subTitle: string;
  title: string;
  author: string
  priority: number;
  publishDate: Date
}