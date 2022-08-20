import styles from "../styles/Calendar.module.css";

const Calendar = () => {
  const calendarCreator = () => {
    const numberOfDays = [];
    const d = new Date();

    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    for (let i = 0; i < 7; i++) {
      if (i === d.getDay()) {
        numberOfDays.push(
          <div className="calendarDaysSelected" key={i}>
            <span>{days[i]}</span>
            <div className="calendarDateSelected">{d.getDate()}</div>
          </div>
        );
      } else {
        numberOfDays.push(
          <div className="calendarDays" key={i}>
            <span>{days[i]}</span>
            <div className="calendarDate">{d.getDate() - d.getDay() + i}</div>
          </div>
        );
      }
    }

    return numberOfDays;
  };

  return <div className={styles.calendarContainer}>{calendarCreator()}</div>;
};
export default Calendar;
