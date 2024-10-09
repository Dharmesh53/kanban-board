export interface Ticket {
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
  tickets: Ticket[];
  users: User[];
}

export enum Grouping {
  STATUS = "Status",
  USER = "User",
}

export enum Ordering {
  PRIORITY = "Priority",
  TITLE = "Title",
}
