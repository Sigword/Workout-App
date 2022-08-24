import * as Dialog from "@radix-ui/react-dialog";
import CustomFoodModal from "./CustomFoodModal";
import styles from "../styles/FoodModal.module.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiOutlineEnter } from "react-icons/ai";

const FoodModal = ({ foodList, setFoodList }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>Add Food</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />

        <Dialog.Content className={styles.content}>
          <div className={styles.modalHeading}>
            <Dialog.Close className={styles.closeButton}>
              <BsArrowLeftShort />
            </Dialog.Close>
            <Dialog.DialogTitle className={styles.title}>
              Breakfast
            </Dialog.DialogTitle>
          </div>
          <div className={styles.foodModalInputContainer}>
            <input
              className={styles.foodModalInput}
              id=""
              placeholder="Search for food..."
            />
            <button className={styles.foodModalEnter}>
              <AiOutlineEnter />
            </button>
          </div>
          <div className={styles.customFoodContainer}>
            <CustomFoodModal foodList={foodList} setFoodList={setFoodList} />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default FoodModal;
