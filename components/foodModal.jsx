import * as Dialog from "@radix-ui/react-dialog";
import styles from "../styles/FoodModal.module.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

const FoodModal = () => {
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
          <div className={styles.foodModalInput}>
            <input id="name" defaultValue="Pedro Duarte" />
            <AiOutlineArrowRight />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default FoodModal;
