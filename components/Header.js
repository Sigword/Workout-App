import styles from "../styles/Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.userContainer}>
        <span>Hello, </span>
        <span>USERNAME</span>
      </div>
      <div className={styles.profileContainer}>
        <p>USER IMAGE</p>
      </div>
    </div>
  );
};
export default Header;
