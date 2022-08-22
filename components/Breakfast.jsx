import styles from "../styles/Calories.module.css";
import FoodModal from "./foodModal";

const Breakfast = () => {
  return (
    <div className={styles.calorieSubContainer}>
      <div className={styles.calorieHeading}>
        <span>Breakfast</span>
      </div>
      <div className={styles.calorieButton}>
        <FoodModal />
      </div>
    </div>
  );
};
export default Breakfast;
