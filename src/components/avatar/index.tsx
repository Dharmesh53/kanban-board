import styles from "./image.module.css";

interface AvatarProps {
  name: string;
  available?: boolean;
  src?: string;
}

export const Avatar = ({ name, available, src }: AvatarProps) => {
  return (
    <div className={`${styles.profile} ${available ? styles.available : ""}`}>
      {src ? (
        <img src={src} alt="-" />
      ) : (
        <span>{name.substring(0, 2).toUpperCase()}</span>
      )}
    </div>
  );
};
