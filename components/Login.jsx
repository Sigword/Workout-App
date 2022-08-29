import styles from "../styles/Login.module.css";
import { useRef, useState } from "react";
import { signup, logout, login } from "../pages/firebase-config";

const Login = ({ currentUser, setSignedIn }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
    setSignedIn(true);
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
    setSignedIn(true);
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
    setSignedIn(false);
  };

  return (
    <div className={styles.signUpContainer}>
      <h1>
        Currently logged in as: <span>{currentUser?.email}</span>
      </h1>
      <input ref={emailRef} type="text" placeholder="Email" />
      <input ref={passwordRef} type="password" placeholder="Password" />

      <button disabled={loading || currentUser != null} onClick={handleSignup}>
        Sign Up
      </button>

      <button onClick={handleLogin}>Log In</button>

      <button disabled={loading || !currentUser} onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};
export default Login;
