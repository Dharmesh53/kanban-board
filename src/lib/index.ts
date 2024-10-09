import { Card } from "../types";

export const QUICKSELL_API_URL =
  "https://api.quicksell.co/v1/internal/frontend-assignment";

export const convertArrayIntoObject = (
  key: keyof Card,
  array: Card[]
): { [key: string]: Card[] } => {
  const object: { [key: string]: Card[] } = {};

  array.forEach((card) => {
    const groupingKey = String(card[key]);
    if (!object[groupingKey]) object[groupingKey] = [];
    object[groupingKey].push(card);
  });

  return object;
};
