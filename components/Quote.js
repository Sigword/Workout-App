import styles from "../styles/quote.module.css";

const Quote = () => {
  return (
    <div className={styles.quoteMain}>
      <div className={styles.quoteBox}>
        <div className={styles.quoteTop}>Quote of the Day</div>
        <div className={styles.quoteBottom}>
          "Whether you think you can or you can't, you're right."
        </div>
      </div>
    </div>
  );
};
export default Quote;
