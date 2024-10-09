import Column from "./column";
import { Card, Grouping, User } from "../../../types";
import { useState, useEffect } from "react";
import { useGrouping } from "../../../contexts/grouping.context";
import { convertArrayIntoObject } from "../../../lib";

interface BoardProps {
  cards: Card[];
  users: User[];
}

export const Board = ({ cards, users }: BoardProps) => {
  const { grouping } = useGrouping();

  const [groupedCards, setGroupedCards] = useState<{ [key: string]: Card[] }>(
    {}
  );

  useEffect(() => {
    if (grouping === Grouping.USER) {
      setGroupedCards(convertArrayIntoObject("userId", cards));
    } else if (grouping === Grouping.STATUS) {
      setGroupedCards(convertArrayIntoObject("status", cards));
    } else if (grouping === Grouping.PRIORITY) {
      setGroupedCards(convertArrayIntoObject("priority", cards));
    }
  }, [grouping, cards]);

  const groupKeys = Object.keys(groupedCards);

  return (
    <div className="board">
      {groupKeys.map((key) => {
        let title = key;
        if (grouping === "user") {
          const user = users.find((u) => u.id === key);
          title = user ? user.name : "Unassigned";
        }

        return (
          <Column
            key={key}
            title={title}
            cards={groupedCards[key]}
            users={users}
          />
        );
      })}
    </div>
  );
};
