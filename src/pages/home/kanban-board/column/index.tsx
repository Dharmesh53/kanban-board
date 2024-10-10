import Card from "../card";
import {
  ActionsIcons,
  Card as CardType,
  Grouping,
  User,
} from "../../../../types";
import styles from "./column.module.css";
import { useGrouping } from "../../../../contexts/grouping.context";
import {
  getPriorityHeading,
  getPriorityIcon,
  getStatusIcon,
} from "../../../../lib";
import { Avatar } from "../../../../components/avatar";

interface ColumnProps {
  title: string;
  cards: CardType[];
  users: User[];
}

const Column = ({ title, cards, users }: ColumnProps) => {
  const { grouping } = useGrouping();

  const getIcon = () => {
    return grouping === Grouping.STATUS
      ? getStatusIcon(title)
      : grouping === Grouping.PRIORITY
      ? getPriorityIcon(title)
      : "";
  };

  const getHeading = () => {
    return grouping === Grouping.PRIORITY ? getPriorityHeading(title) : title;
  };
  const findUserByName = () => {
    return users.find((user) => user.name === title);
  };

  const userAvatar = () => {
    const user = findUserByName();
    if (!user) return null;
    return <Avatar name={user.name} available={user.available} />;
  };

  return (
    <div className={styles.column}>
      <div className={styles.header}>
        <span className={styles.leftHeading}>
          {grouping === Grouping.USER ? userAvatar() : <img src={getIcon()} />}
          <span className={styles.title}>{getHeading()}</span>
          <span className={styles.count}>{cards.length}</span>
        </span>

        <span className={styles.rightHeading}>
          <img src={ActionsIcons.ADD} className={styles.button} />
          <img src={ActionsIcons.THREEDOTS} className={styles.button} />
        </span>
      </div>

      <div className={styles.card}>
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
