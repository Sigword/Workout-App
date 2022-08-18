import styles from "../styles/Calendar.module.css";

const Calendar = () => {
  return (
    <div className={styles.calendarContainer}>
      <div className="calendarDays">
        <p>MON</p>
        <span className="calendarDate">15</span>
      </div>
      <div className="calendarDaysSelected">
        <p>TUE</p>
        <span className="calendarDateSelected">16</span>
      </div>
      <div className="calendarDays">
        <p>WED</p>
        <span className="calendarDate">17</span>
      </div>
      <div className="calendarDays">
        <p>THU</p>
        <span className="calendarDate">18</span>
      </div>
      <div className="calendarDays">
        <p>FRI</p>
        <span className="calendarDate">19</span>
      </div>
      <div className="calendarDays">
        <p>SAT</p>
        <span className="calendarDate">20</span>
      </div>
      <div className="calendarDays">
        <p>SUN</p>
        <span className="calendarDate">21</span>
      </div>
    </div>
  );
};
export default Calendar;
