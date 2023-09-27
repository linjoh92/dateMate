import styles from './about.module.scss'

export default function About() {
    return (
      <div className={styles.container}>
        <div className={styles["container_content"]}>
          <h2>About DATEMATE</h2>
          <p>
            Welcome to DATEMATE - Your Daily Date and Day Companion! Are you tired of constantly checking your calendar, clock, or weather app to keep track of the day, time, and date? DATEMATE is here to simplify your life by providing you with all this essential information in one place.
          </p>
          <h3>What is DATEMATE?</h3>
          <p>
            DATEMATE is your virtual assistant designed to keep you informed about the most crucial aspects of your day. Whether you're planning meetings, scheduling appointments, or just curious about the current date and time, DATEMATE has got you covered.
          </p>
          <h3>Key Features:</h3>
          <ul>
            <li>Day of the Week: DATEMATE instantly tells you which day of the week it is, helping you stay oriented throughout the week.</li>
            <li>Current Time: Get the precise time, so you're never late for an important event or appointment.</li>
            <li>Today's Date: DATEMATE displays the current date, making it easy to track deadlines and special occasions.</li>
          </ul>
        </div>
      </div>
    );

  }