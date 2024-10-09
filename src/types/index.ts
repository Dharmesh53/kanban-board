export interface Card {
  id: string;
  title: string;
  tag: string[];
  userId: string;
  status: string;
  priority: number;
}

export interface User {
  id: string;
  name: string;
  available: boolean;
}

export interface Data {
  tickets: Card[];
  users: User[];
}

export enum Grouping {
  STATUS = "status",
  USER = "user",
  PRIORITY = "priority",
}

export enum Ordering {
  PRIORITY = "priority",
  TITLE = "title",
}
