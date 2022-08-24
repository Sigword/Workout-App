import { useState } from "react";
import styles from "../styles/Calories.module.css";
import FoodModal from "./FoodModal";

const Breakfast = () => {
  const [foodList, setFoodList] = useState([]);

  return (
    <div className={styles.calorieSubContainer}>
      <div className={styles.calorieHeading}>
        <span>Breakfast</span>
      </div>
      <div>{foodList}</div>
      <div className={styles.calorieButton}>
        <FoodModal foodList={foodList} setFoodList={setFoodList} />
      </div>
    </div>
  );
};
export default Breakfast;
