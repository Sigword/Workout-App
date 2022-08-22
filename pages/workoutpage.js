import styles from "../styles/Workout.module.css";
import Hypertrophy from "../components/Hypertrophy";
import Strength from "../components/Strength";

const Workout = () => {
  return (
    <div className={styles.WorkoutContainer}>
      <Strength />
      <Hypertrophy />
    </div>
  );
};
export default Workout;
