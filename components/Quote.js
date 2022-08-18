import styles from "../styles/Quote.module.css";

const Quote = () => {
  return (
    <div className={styles.quoteMain}>
      <div className={styles.quoteBox}>
        <div className={styles.quoteTop}>Quote of the Day</div>
        <div className={styles.quoteBottom}>
          <textarea
            placeholder="Epic Quote"
            name=""
            id=""
            cols="30"
            rows="3"
          ></textarea>
        </div>
      </div>
    </div>
  );
};
export default Quote;
