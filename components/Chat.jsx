import SignOut from "./SignOut";
import ChatMessage from "./ChatMessage";
import { db, auth } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useState } from "react";
import firebase from "firebase/compat/app";
import styles from "../styles/Chat.module.css";

const Chat = () => {
  const messagesRef = db.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(50);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
  };

  return (
    <section>
      <div className={styles.signOutContainer}>
        <SignOut />
      </div>
      <div className={styles.chatContainer}>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </div>
      <div className={styles.inputContainer}>
        <form onSubmit={sendMessage}>
          <input
            value={formValue}
            onChange={(e) => {
              setFormValue(e.target.value);
            }}
          />
          <button type="submit">SEND</button>
        </form>
      </div>
    </section>
  );
};
export default Chat;
