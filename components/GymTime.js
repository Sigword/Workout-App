import styles from "../styles/Gym.module.css";

const Gym = () => {
  return (
    <div className={styles.gymTimeContainer}>
      <div className={styles.gymTime}>
        <div className={styles.gymTimeText}>GYM TIME</div>
        <div className={styles.gymTimeInput}>
          <input type="text" placeholder="7:00PM" />
        </div>
      </div>
    </div>
  );
};
export default Gym;
