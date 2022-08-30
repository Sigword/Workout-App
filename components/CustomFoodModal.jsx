import * as Dialog from "@radix-ui/react-dialog";
import styles from "../styles/CustomFoodModal.module.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

const CustomFoodModal = ({ foodList, setFoodList }) => {
  const [customMealName, setCustomMealName] = useState("");
  const [customCalories, setCustomCalories] = useState("");

  const mealNameInputHandler = (e) => {
    setCustomMealName(e.target.value);
    console.log(customMealName);
  };

  const calorieInputHandler = (e) => {
    setCustomCalories(e.target.value.toString());
    console.log(customCalories);
  };

  const customFoodSubmitHandler = () => {
    setFoodList([
      ...foodList,
      <div className="foodItemContainer">
        <span className="foodItemTitle">{customMealName}</span>
        <span className="foodItemCalories">{customCalories}</span>
      </div>,
    ]);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>Add Custom Food</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />

        <Dialog.Content className={styles.content}>
          <div className={styles.modalHeading}>
            <Dialog.Close className={styles.closeButton}>
              <BsArrowLeftShort />
            </Dialog.Close>
            <Dialog.DialogTitle className={styles.title}>
              Quick Add
            </Dialog.DialogTitle>
          </div>
          <div className={styles.foodModalInputContainer}>
            <fieldset>
              <label htmlFor="meal">Meal Name:</label>
              <input
                className={styles.foodModalInput}
                id="meal"
                placeholder="Enter Meal Name..."
                value={customMealName}
                onChange={mealNameInputHandler}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="calories">Calories:</label>
              <input
                type="number"
                className={styles.foodModalInput}
                id="calories"
                placeholder="Enter Calories..."
                value={customCalories}
                onChange={calorieInputHandler}
              />
            </fieldset>
          </div>
          <div className={styles.inputButtonContainer}>
            <Dialog.Close
              onClick={customFoodSubmitHandler}
              className={styles.closeButton}
            >
              <AiOutlinePlus />
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default CustomFoodModal;
