export interface Item {
  name: string;
  list: List;
  description: string;
  image: string;
  link: string;
  nextItem: Item;
  previousItem: Item;
}

export interface List {
  name: string;
  owner: User;
  private: boolean;
  description: string;
  image: string;
  firstItem: Item;
}

export interface User {
  username: string;
  email: string;
  password: string;
  darkMode: boolean;
  lists: List[];
}
