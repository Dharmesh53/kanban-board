import { Button } from "../button";
import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Button
        label="Display"
        icon1="/assets/Display.svg"
        icon2="/assets/down.svg"
        size="small"
      />
    </div>
  );
};
