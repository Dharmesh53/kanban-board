import Card from "./card";
import { Card as CardType, User } from "../../../types";

interface ColumnProps {
  title: string;
  cards: CardType[];
  users: User[];
}

const Column = ({ title, cards, users }: ColumnProps) => {
  return (
    <div className="column">
      <h2 className="column-title">{title}</h2>
      <div className="column-cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            user={users.find((u) => u.id === card.userId)}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
