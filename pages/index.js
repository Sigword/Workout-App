import Head from "next/head";
import Login from "../components/Login";
import Calendar from "../components/Calendar";
import Header from "../components/Header";
import Chat from "../components/Chat";
import Work from "../components/Work";
import Quote from "../components/Quote";
import Gym from "../components/GymTime";
import styles from "../styles/Home.module.css";

import { useAuth } from "./firebase-config";

export default function Home() {
  const currentUser = useAuth();

  return (
    <div className={styles.container}>
      <Head>
        <title>Workout App</title>
        <meta name="description" content="For the homies" />
      </Head>

      <Login currentUser={currentUser} />
    </div>
  );
}
