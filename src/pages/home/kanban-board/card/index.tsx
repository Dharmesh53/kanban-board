import { Avatar } from "../../../../components/avatar";
import { useGrouping } from "../../../../contexts/grouping.context";
import { getPriorityIcon, getStatusIcon } from "../../../../lib";
import {
  Card as CardType,
  Grouping,
  PriorityIcons,
  StatusIcons,
  User,
} from "../../../../types";
import styles from "./card.module.css";

interface CardProps {
  card: CardType;
  user?: User;
}

const Card = ({ card, user }: CardProps) => {
  const { grouping } = useGrouping();

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span>{card.id}</span>
        {grouping !== Grouping.USER && user && (
          <Avatar name={user?.name} available={user?.available} />
        )}
      </div>
      <div className={styles.title}>
        {grouping !== Grouping.STATUS && (
          <img
            src={getStatusIcon(card.status)}
            alt="Status Icon"
            style={{ margin: "4px" }}
          />
        )}
        <span>{card.title}</span>
      </div>
      <div className={styles.footer}>
        {grouping !== Grouping.PRIORITY && (
          <span className={styles.icon}>
            <img
              src={getPriorityIcon(String(card.priority))}
              alt={`Priority: ${card.priority}`}
            />
          </span>
        )}
        {card.tag.map((text, i) => (
          <span key={i} className={styles.tag}>
            <span className={styles.tagContent}>{text}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
