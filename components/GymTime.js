import styles from "../styles/gym.module.css";

const Gym = () => {
  return (
    <div className={styles.chatMain}>
      <div className={styles.chatBox}>
        <div className={styles.chatText}>GYM TIME</div>
        <div className={styles.chatLogo}>7:00</div>
      </div>
    </div>
  );
};
export default Gym;
