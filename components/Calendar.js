import styles from "../styles/Calendar.module.css";
import { useState } from "react";

const Calendar = () => {
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [currentDateStyles, setCurrentDateStyles] = useState("calendarDate");
  const [currentDayStyles, setCurrentDayStyles] = useState("calendarDays");

  const days = [1, 2, 3, 4, 5, 6, 7];

  const dateHandler = () => {
    const d = new Date();
    console.log(d.getDate());
    console.log(d.getDay());
  };

  return (
    <div className={styles.calendarContainer}>
      <h1>HELL</h1>
    </div>
  );
};
export default Calendar;
