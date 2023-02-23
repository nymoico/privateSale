import React, { useEffect, useState } from "react";

import styles from "./styles.module.css";

// Jan 01 1970 05:30:01

const CountDown = ({ dayCount }) => {
  const endTime = new Date(dayCount).getTime();

  const [currentTime, setcurrentTime] = useState(new Date().getTime());
  const gap = endTime - currentTime; //177670892

  const seconds = 1000; // in milliseconds
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const day = Math.floor(gap / days);
  const hour = Math.floor((gap % days) / hours);
  const minute = Math.floor((gap % hours) / minutes);
  const second = Math.floor((gap % minutes) / seconds);

  useEffect(() => {
    setTimeout(() => setcurrentTime(new Date().getTime()), 1000);
  }, [currentTime]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.countValue}>
        {" "}
        <p className={styles.time}>{`${day < 10 ? "0" + day : day}`}</p>
        <p className={styles.time}>{`${hour < 10 ? "0" + hour : hour}`}</p>
        <p className={styles.time}>{`${
          minute < 10 ? "0" + minute : minute
        }`}</p>
        <p className={styles.time}>{`${
          second < 10 ? "0" + second : second
        }`}</p>
      </div>

      <div className={styles.countText}>
        <p className={styles.text}>Days</p> <p className={styles.text}>Hours</p>
        <p className={styles.text}>Minutes</p>
        <p className={styles.text}>Seconds</p>
      </div>
    </div>
  );
};

export default CountDown;
