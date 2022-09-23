import SignIn from "../components/SignIn";
import Chat from "../components/Chat";
import styles from "../styles/Chats.module.css";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Chats = () => {
  const [user] = useAuthState(auth);
  return <section>{user ? <Chat /> : <SignIn />}</section>;
};
export default Chats;
