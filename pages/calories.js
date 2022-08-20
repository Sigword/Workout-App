import Breakfast from "../components/Breakfast";
import styles from "../styles/Calories.module.css";

const Calories = () => {
  return (
    <div className={styles.calorieContainer}>
      <div className={styles.todaysCalories}>
        <span>Today's Calories</span>
        <span className={styles.caloriesCount}>2000</span>
      </div>

      <Breakfast />
    </div>
  );
};
export default Calories;
