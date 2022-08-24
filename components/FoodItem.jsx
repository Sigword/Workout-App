import styles from "../styles/FoodItem.module.css";

const FoodItem = () => {
  return (
    <div className={styles.foodItemContainer}>
      <span className={styles.foodItemTitle}></span>
      <span className={styles.foodItemCalories}></span>
    </div>
  );
};
export default FoodItem;
