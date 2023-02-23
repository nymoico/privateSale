import React from "react";
import Line from "../Line/Line";
import styles from "./styles.module.css";

const IcoDetails = () => {
  const data = [
    {
      saleName: "PRIVATE SALE",
      sale: 7,
      tokenOffered: 126,
      startDate: "March 1, 2023",
      startTime: "9:00AM GMT",
      endDate: "March 20, 2023",
      endTime: "11:00AM GMT",
      softCap: 168,
      Hardcap: 840,
      to: "",
    },
    {
      saleName: " PRE SALE",
      sale: 15,
      tokenOffered: 150,
      startDate: "April 1, 2023",
      startTime: "11:00AM GMT",
      endDate: "June 15, 2023",
      endTime: "11:00AM GMT",
      softCap: 405,
      Hardcap: 945,
      to: "",
    },
    {
      saleName: "TOKEN SALE",
      sale: 52,
      tokenOffered: 520,
      startDate: "June 15, 2023",
      startTime: "11:00AM GMT",
      endDate: "July 31, 2023",
      endTime: "11:00AM GMT",
      softCap: 1560,
      Hardcap: 3640,
      to: "",
    },
  ];
  return (
    <section className={styles.icoDetails}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>ico details</h2>
        <button className={styles.button}>determine your earnings !</button>
      </div>
      <div className={styles.icoDetailsContainer}>
        <div className={styles.textAndValueContainer}>
          {data.map((el, i) => (
            <div
              className={styles.textValueWrapper}
              key={i}
              data-aos="fade-up"
              data-aos-duration="2500"
              data-aos-delay={`${
                i === 0 ? 500 : i === 1 ? 750 : i === 2 ? 1000 : 2000
              }`}
            >
              <div className={styles.textAndValue}>
                <p className={styles.text}>{el.saleName}</p>
                <p className={styles.value}>{el.sale}%</p>
              </div>
              <div className={styles.textAndValue}>
                <p className={styles.text}> Tokens Offered</p>
                <p className={styles.value}>{el.tokenOffered}M</p>
              </div>
            </div>
          ))}
        </div>{" "}
        <Line />
        <div className={styles.textAndValueContainer}>
          {data.map((el, i) => (
            <div
              className={`${styles.info}`}
              key={i}
              data-aos="fade-up"
              data-aos-duration="2500"
              data-aos-delay={`${
                i === 0 ? 500 : i === 1 ? 750 : i === 2 ? 1000 : 2000
              }`}
            >
              <div className={styles.textAndValue}>
                <p className={styles.value}>Start</p>
                <p className={styles.text}>{el.startDate}</p>
                <p className={styles.text}>{el.startTime}</p>
              </div>
              <div className={styles.textAndValue}>
                <p className={styles.value}> End</p>
                <p className={styles.text}>{el.endDate}</p>
                <p className={styles.text}>{el.endTime}</p>
              </div>
              <div className={styles.textAndValue}>
                <p className={styles.value}>Softcap</p>
                <p className={styles.text}>
                  {el.softCap.toFixed(2).toLocaleString("en-us")}$
                </p>
              </div>
              <div className={styles.textAndValue}>
                <p className={styles.value}>Hardcap</p>
                <p className={styles.text}>{el.startDate}</p>
                <p className={styles.text}>{el.startTime}</p>
              </div>
            </div>
          ))}
        </div>{" "}
      </div>
    </section>
  );
};

export default IcoDetails;
