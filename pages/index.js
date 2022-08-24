import Head from "next/head";
import Calendar from "../components/Calendar";
import Header from "../components/Header";
import Chat from "../components/Chat";
import Work from "../components/Work";
import Quote from "../components/Quote";
import styles from "../styles/Home.module.css";
import Gym from "../components/GymTime";
import { useState, useSyncExternalStore } from "react";

export default function Home() {
  const [calories, setCalories] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Workout App</title>
        <meta name="description" content="For the homies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Calendar />
      <Gym />
      <Quote />
      <Work calories={calories} />
      <Chat />
    </div>
  );
}
