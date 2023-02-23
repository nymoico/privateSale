import React from "react";
import { q1, q2, q3 } from "../../assets/images/images";
import roadmapbg from "../../assets/video/roadmapbg.mp4";
import Line from "../Line/Line";

import styles from "./styles.module.css";
const RoadMap = () => {
  const data = [
    {
      img: q1,
      title: "Q1",
      text: [
        "Prototype Mobile Application",
        "Create Incentive Smartcontracts",
        "Set up team",
        "Dashboard members",
        "Legal",
      ],
    },
    {
      img: q2,
      title: "Q2",
      text: [
        "Demo application",
        "Beta testing",
        "API development",
        "Structure company",
      ],
    },
    {
      img: q3,
      title: "Q3",
      text: ["Going Live", "Sign agreements", "Marketing", "Tutorials"],
    },
  ];
  return (
    <section className={styles.roadmap}>
      <video
        src={roadmapbg}
        autoPlay
        muted
        loop
        className={styles.video}
      ></video>
      <h2 className={styles.heading}>roadmap</h2>

      <div className={styles.images}>
        <div
          className={`${styles.contents} `}
          data-aos="fade-up"
          data-aos-duration="2500"
          data-aos-delay="2000"
        >
          {data.map((el, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay={`${
                i === 0 ? 250 : i === 1 ? 500 : i === 2 ? 750 : 1000
              }`}
            >
              <img src={el.img} alt="#" className={styles.image} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.lineContainer}>
        <Line hide="hide" />
      </div>
      <div className={styles.contents}>
        {data.map((el, i) => (
          <div
            key={i}
            className={styles.textContainer}
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay={`${
              i === 0 ? 750 : i === 1 ? 1000 : i === 2 ? 1250 : 2000
            }`}
          >
            <h3 className={styles.title}>{el.title}</h3>
            <div>
              {el.text.map((el, index) => (
                <li className={styles.text} key={index}>
                  {el}
                </li>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.overlay}></div>
    </section>
  );
};

export default RoadMap;
