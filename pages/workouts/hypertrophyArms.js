import styles from "../../styles/Form.module.css";

const hyperArms = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formBox}>
        <div className={styles.formTop}>
          <div className={styles.formName}></div>
          <div className={styles.formNotes}></div>
        </div>
        <div className={styles.formMiddle}>
          <span>Set</span>
          <span>Lbs</span>
          <span>Reps</span>
          <span>Time</span>
          <span>Check</span>
        </div>
        <div className={styles.formBoxBottom}>
          <span>1</span>
          <span>300</span>
          <span>10</span>
          <span>2:15</span>
          <span>yes</span>
        </div>
        <div className={styles.formBoxBottom}>
          <span>2</span>
          <span>250</span>
          <span>10</span>
          <span>3:15</span>
          <span>yes</span>
        </div>
        <div className={styles.formBoxBottom}>
          <span>3</span>
          <span>200</span>
          <span>10</span>
          <span>5:15</span>
          <span>yes</span>
        </div>
        <div className={styles.formBoxBottom}>
          <span>4</span>
          <span>150</span>
          <span>10</span>
          <span>7:18</span>
          <span>yes</span>
        </div>
      </div>
    </div>
  );
};
export default hyperArms;
