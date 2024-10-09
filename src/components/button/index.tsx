import styles from "./button.module.css";

interface ButtonProps {
  label: string;
  icon1?: string;
  icon2?: string;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  label,
  icon1,
  icon2,
  size = "medium",
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[size]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon1 && <img src={icon1} alt={label} className={styles.icon} />}
      {label}
      {icon2 && <img src={icon2} alt={label} className={styles.icon} />}
    </button>
  );
};
