import styles from "./button.module.css";

interface ButtonProps {
  label: string;
  Lefticon?: string;
  Righticon?: string;
  size?: "small" | "medium" | "large";
  shadow?: boolean;
  disabled?: boolean;
  width?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  label,
  Lefticon,
  Righticon,
  size = "medium",
  shadow,
  width,
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[size]} ${shadow && styles.shadow}`}
      onClick={onClick}
      disabled={disabled}
      style={width ? { minWidth: width } : undefined}
    >
      {Lefticon && (
        <img src={Lefticon} alt="Left icon" className={styles.Lefticon} />
      )}
      {label}
      {Righticon && (
        <img src={Righticon} alt="Right icon" className={styles.Righticon} />
      )}
    </button>
  );
};
