import styles from "../styles/chat.module.css";
import { BsChatDots } from "react-icons/bs";

const Chat = () => {
  return (
    <div className={styles.chatMain}>
      <a href="auth" className={styles.chatBox}>
        <div className={styles.chatText}>Chat</div>
        <div className={styles.chatLogo}>
          <svg width="0" height="0">
            <linearGradient
              id="blue-gradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop stopColor="#2c0aff" offset="0%" />
              <stop stopColor="#eb00ff" offset="100%" />
            </linearGradient>
          </svg>

          <BsChatDots style={{ fill: "url(#blue-gradient)" }} />
        </div>
      </a>
    </div>
  );
};
export default Chat;
