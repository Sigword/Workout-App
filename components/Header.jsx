import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.userContainer}>
        <span>HELLO, </span>
        <span className={styles.userNameText}>DADDY</span>
      </div>
      <div className={styles.profileContainer}>
        <p>USER-IMAGE</p>
      </div>
    </div>
  );
};
export default Header;
