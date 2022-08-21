import React, { useContext } from "react";

import styles from "../styles/Auth.module.css";

import { Context } from "../context";

import { useRouter } from "next/router";
import axios from "axios";

export default function Auth() {
  const { username, secret, setUsername, setSecret } = useContext(Context);

  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();

    if (username.length === 0 || secret.length === 0) return;

    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-key": "3b5b0961-26f0-47cd-9b03-e1440bdc19b9" } }
      )
      .then((r) => router.push("/chats"));
  }
  return (
    <div className={styles.background}>
      <div className={styles.authContainer}>
        <form className={styles.authForm} onSubmit={(e) => onSubmit(e)}>
          <div className={styles.authTitle}>SOA Chat</div>

          <div className={styles.inputContainer}>
            <input
              placeholder="Email"
              className={styles.textInput}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>

          <div className={styles.inputContainer}>
            <input
              type="password"
              placeholder="Password"
              className={styles.textInput}
              onChange={(e) => setSecret(e.target.value)}
            ></input>
          </div>

          <button type="submit" className={styles.submitButton}>
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
