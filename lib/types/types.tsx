export interface Item {
  _id: string;
  name: string;
  list: List;
  description: string;
  image: string;
  link: string;
  nextItem: Item;
  previousItem: Item;
}

export interface List {
  _id: string;
  name: string;
  owner: User;
  private: boolean;
  description: string;
  image: string;
  firstItem: Item;
}

export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  darkMode: boolean;
  lists: List[];
}
