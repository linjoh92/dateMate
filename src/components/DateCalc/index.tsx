import { useState, useEffect } from "react";
import styles from "./dateCalc.module.scss";


export default function DateCalc() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDate = currentTime.toLocaleDateString();
  const dayOfWeek = currentTime.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className={styles.section}>
      <p>Weekday: <span>{dayOfWeek}</span></p>
      <p>Time: <span>{formattedTime}</span></p>
      <p>Date: <span>{formattedDate}</span></p>
    </div>
  );
}