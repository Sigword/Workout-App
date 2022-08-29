import styles from "../styles/Login.module.css";
import { useRef, useState } from "react";
import { signup, logout, login } from "../pages/firebase-config";

const Login = ({ currentUser }) => {
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
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Currenntly logged in as: {currentUser?.email}</h1>

      <div className={styles.signUpContainer}>
        <input ref={emailRef} type="text" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />

        <button
          disabled={loading || currentUser != null}
          onClick={handleSignup}
        >
          Sign Up
        </button>

        <button>Log In</button>

        <button disabled={loading || !currentUser} onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};
export default Login;
