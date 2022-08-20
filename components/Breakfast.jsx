import styles from "../styles/Calories.module.css";

const Breakfast = () => {
  return (
    <div className={styles.calorieSubContainer}>
      <div className={styles.calorieHeading}>
        <span>Breakfast</span>
      </div>
      <div className={styles.calorieButton}>
        <button>Add Food</button>
      </div>
    </div>
  );
};
export default Breakfast;
