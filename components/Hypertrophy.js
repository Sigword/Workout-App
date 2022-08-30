import styles from "../styles/Workout.module.css";
import Link from "next/link";

const Hypertrophy = () => {
  return (
    <div className={styles.WorkoutBox}>
      <div className={styles.WorkoutTop}>Hypertrophy</div>
      <div className={styles.WorkoutBottom}>
        <a className={styles.WorkoutButton}>Push</a>

        <a className={styles.WorkoutButton}>Pull</a>

        <a className={styles.WorkoutButton}>Legs</a>
        <Link href="workouts/hypertrophyArms">
          <a className={styles.WorkoutButton}>Arms</a>
        </Link>
      </div>
    </div>
  );
};
export default Hypertrophy;
