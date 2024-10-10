import Column from "./column";
import { Card, Grouping, Ordering, Status, User } from "../../../types";
import { useMemo } from "react";
import { useGrouping } from "../../../contexts/grouping.context";
import { convertArrayIntoObject } from "../../../lib";
import styles from "./kanban.module.css";
import { useOrdering } from "../../../contexts/ordering.context";

interface BoardProps {
  cards: Card[];
  users: User[];
}

export const Board = ({ cards, users }: BoardProps) => {
  const { grouping } = useGrouping();
  const { ordering } = useOrdering();

  const groupedCards = useMemo(() => {
    let grouped: Record<string, Card[]> = {};

    if (grouping === Grouping.USER) {
      grouped = convertArrayIntoObject("userId", cards);
    } else if (grouping === Grouping.STATUS) {
      grouped = convertArrayIntoObject("status", cards);
      Object.values(Status).forEach((status) => {
        if (!grouped[status]) {
          grouped[status] = [];
        }
      });
    } else if (grouping === Grouping.PRIORITY) {
      grouped = convertArrayIntoObject("priority", cards);
    }

    return grouped;
  }, [grouping, cards]);

  const orderedCards = useMemo(() => {
    const sortCards = (cards: Card[]) => {
      if (ordering === Ordering.TITLE) {
        return [...cards].sort((a, b) => a.title.localeCompare(b.title));
      } else if (ordering === Ordering.PRIORITY) {
        return [...cards].sort((a, b) => a.priority - b.priority);
      }
      return cards;
    };

    const orderedGrouped: Record<string, Card[]> = {};
    Object.keys(groupedCards).forEach((key) => {
      orderedGrouped[key] = sortCards(groupedCards[key]);
    });

    return orderedGrouped;
  }, [ordering, groupedCards]);

  const groupKeys = Object.keys(orderedCards);
  return (
    <div className={styles.board}>
      {groupKeys.map((key) => {
        let title = key;
        if (grouping === Grouping.USER) {
          const user = users.find((u) => u.id === key);
          title = user ? user.name : "Unassigned";
        }

        return (
          <>
            <Column
              key={key}
              title={title}
              cards={orderedCards[key]}
              users={users}
            />
          </>
        );
      })}
    </div>
  );
};
