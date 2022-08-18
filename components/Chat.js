import styles from "../styles/chat.module.css";

const Chat = () => {
  return (
    <div className={styles.chatMain}>
      <div className={styles.chatBox}>
        <div className={styles.chatText}>Chat</div>
        <div className={styles.chatLogo}></div>
      </div>
    </div>
  );
};
export default Chat;
