import React from "react";
import { Card as CardType, User } from ".././../../types";

interface CardProps {
  card: CardType;
  user?: User;
}

const Card: React.FC<CardProps> = ({ card, user }) => {
  const { title, priority, status } = card;

  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-priority">Priority: {priority}</p>
      <p className="card-status">Status: {status}</p>
      <p className="card-user">
        Assigned to: {user ? user.name : "Unassigned"}
      </p>
    </div>
  );
};

export default Card;
