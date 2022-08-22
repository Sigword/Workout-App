import styles from "../styles/Workout.module.css";
import Link from "next/link";

const Hypertrophy = () => {
  return (
    <div className={styles.WorkoutBox}>
      <div className={styles.WorkoutTop}>Hypertrophy</div>
      <div className={styles.WorkoutBottom}>
        <Link>
          <a className={styles.WorkoutButton}>Push</a>
        </Link>
        <Link>
          <a className={styles.WorkoutButton}>Pull</a>
        </Link>
        <Link>
          <a className={styles.WorkoutButton}>Legs</a>
        </Link>
        <Link>
          <a className={styles.WorkoutButton}>Arms</a>
        </Link>
      </div>
    </div>
  );
};
export default Hypertrophy;
