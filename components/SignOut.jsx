import { auth } from "../firebase";
import styles from "../styles/Chat.module.css";

const SignOut = () => {
  return (
    auth.currentUser && (
      <div className={styles.signOutButton}>
        <button onClick={() => auth.signOut()}>Sign Out</button>
      </div>
    )
  );
};
export default SignOut;
