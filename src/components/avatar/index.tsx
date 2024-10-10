import styles from "./image.module.css";

interface AvatarProps {
  name: string;
  available?: boolean;
  src?: string;
}

export const Avatar = ({ name, available, src }: AvatarProps) => {
  return (
    <div className={`${styles.profile} ${available ? styles.available : ""}`}>
      <img src={src || ""} alt={name.substring(0, 2).toUpperCase()} />
    </div>
  );
};
