import Head from "next/head";
import Calendar from "../components/Calendar";
import Header from "../components/Header";
import Chat from "../components/Chat";
import Work from "../components/Work";
import Quote from "../components/Quote";
import Gym from "../components/GymTime";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Workout App</title>
        <meta name="description" content="For the homies" />
      </Head>
      <main>
        <Header />
        <Calendar />
        <Gym />
        <Quote />
      </main>
    </div>
  );
}
