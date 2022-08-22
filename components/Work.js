import styles from "../styles/work.module.css";
import Link from "next/link";

const Work = () => {
  return (
    <div className={styles.workMain}>
      <Link href="workoutpage">
        <a className={styles.workBox}>
          <div className={styles.workOutA}>Workout</div>
          <div className={styles.workOutB}>
            <span className={styles.workBold}>1000lbs</span>
            <span>Lifted</span>
            <span>Today</span>
          </div>
        </a>
      </Link>
      <Link href="calories">
        <a className={styles.workBox}>
          <div className={styles.workOutA}>Calories</div>
          <div className={styles.workOutB}>
            <span className={styles.workBold}>200</span>
            <span>Calories</span>
            <span>Eaten</span>
            <span>Today</span>
          </div>
        </a>
      </Link>
    </div>
  );
};
export default Work;
