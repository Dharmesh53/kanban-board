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

export enum Status {
  BACKLOG = "Backlog",
  CANCELLED = "Cancelled",
  INPROGRESS = "In progress",
  DONE = "Done",
  TODO = "Todo",
}

export enum Priority {
  NOPRIORITY = "0",
  LOW = "1",
  MEDIUM = "2",
  HIGH = "3",
  URGENT = "4",
}

export enum PriorityIcons {
  NOPRIORITY = "/assets/No-priority.svg",
  URGENT_COLOR = "/assets/SVG - Urgent Priority colour.svg",
  URGENT_GREY = "/assets/SVG - Urgent Priority grey.svg",
  HIGH = "/assets/Img - High Priority.svg",
  MEDIUM = "/assets/Img - Medium Priority.svg",
  LOW = "/assets/Img - Low Priority.svg",
}

export enum StatusIcons {
  BACKLOG = "/assets/Backlog.svg",
  CANCELLED = "/assets/Cancelled.svg",
  INPROGRESS = "/assets/in-progress.svg",
  DONE = "/assets/Done.svg",
  TODO = "/assets/To-do.svg",
}

export enum ActionsIcons {
  THREEDOTS = "/assets/3 dot menu.svg",
  ADD = "/assets/add.svg",
  DOWN = "/assets/down.svg",
}
