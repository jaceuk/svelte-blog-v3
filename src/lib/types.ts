export interface IPosts {
  posts: IPost[];
}

export interface IPost {
  title: string;
  date: string;
  intro: string;
  tags: string[];
}
