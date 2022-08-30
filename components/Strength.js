import styles from "../styles/Workout.module.css";
import Link from "next/link";

const Strength = () => {
  return (
    <div className={styles.WorkoutBox}>
      <div className={styles.WorkoutTop}>Strength</div>
      <div className={styles.WorkoutBottom}>
        <a className={styles.WorkoutButton}>Push</a>

        <a className={styles.WorkoutButton}>Pull</a>

        <a className={styles.WorkoutButton}>Legs</a>

        <a className={styles.WorkoutButton}>Arms</a>
      </div>
    </div>
  );
};
export default Strength;
