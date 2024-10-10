import { Card as CardType, PriorityIcons, User } from "../../../../types";
import styles from "./card.module.css";

interface CardProps {
  card: CardType;
  user?: User;
}

const Card = ({ card, user }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span>{card.id}</span>
        <div
          className={`${styles.profile} ${user?.available && styles.available}`}
        >
          <img
            // src={user?.image}
            alt={user?.name.substring(0, 2).toUpperCase()}
          />
        </div>
      </div>
      <p className={styles.title}>{card.title}</p>
      <div className={styles.footer}>
        <span className={styles.icon}>
          <img src={PriorityIcons.URGENT_GREY} alt={String(card.priority)} />
        </span>
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
