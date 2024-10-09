import styles from "./home.module.css";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

export default HomeLayout;
