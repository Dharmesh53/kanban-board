import { Card, Priority, PriorityIcons, Status, StatusIcons } from "../types";

export const QUICKSELL_API_URL =
  "https://api.quicksell.co/v1/internal/frontend-assignment";

export const convertArrayIntoObject = (
  key: keyof Card,
  array: Card[]
): Record<string, Card[]> => {
  const object: Record<string, Card[]> = {};

  array.forEach((card) => {
    const groupingKey = String(card[key]);
    if (!object[groupingKey]) object[groupingKey] = [];
    object[groupingKey].push(card);
  });

  return object;
};

export const getStatusIcon = (title: string) => {
  switch (title) {
    case Status.DONE:
      return StatusIcons.DONE;
    case Status.TODO:
      return StatusIcons.TODO;
    case Status.BACKLOG:
      return StatusIcons.BACKLOG;
    case Status.CANCELLED:
      return StatusIcons.CANCELLED;
    case Status.INPROGRESS:
      return StatusIcons.INPROGRESS;
    default:
      return "";
  }
};

export const getPriorityIcon = (title: string) => {
  switch (title) {
    case Priority.NOPRIORITY:
      return PriorityIcons.NOPRIORITY;
    case Priority.LOW:
      return PriorityIcons.LOW;
    case Priority.MEDIUM:
      return PriorityIcons.MEDIUM;
    case Priority.HIGH:
      return PriorityIcons.HIGH;
    case Priority.URGENT:
      return PriorityIcons.URGENT_COLOR;
    default:
      return "";
  }
};

export const getPriorityHeading = (title: string) => {
  switch (title) {
    case Priority.NOPRIORITY:
      return "No Priority";
    case Priority.LOW:
      return "Low";
    case Priority.MEDIUM:
      return "Medium";
    case Priority.HIGH:
      return "High";
    case Priority.URGENT:
      return "Urgent";
    default:
      return "Priority";
  }
};
