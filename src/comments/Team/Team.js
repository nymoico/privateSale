import React from "react";
import {
  johann,
  kevin,
  louis,
  dylan,
  frank,
  abdel,
  helene,
  jora,
  andrew,
  jim,
  fedrik,
} from "../../assets/images/images";
import TeamBg from "../../assets/video/teambg.mp4";
import styles from "./styles.module.css";

const Team = () => {
  const teams = [
    { img: johann, name: "Johann Caubergh", position: "Founder" },
    { img: kevin, name: "Kevin Ewings", position: " Operationalr" },
    { img: louis, name: "Louis LIbart", position: " Finance" },
    { img: dylan, name: "Dylan Ressan", position: " Cryptonomics" },
    { img: frank, name: "Frank Van Oss", position: " Public Relations" },
    { img: abdel, name: "Abdel Khan", position: " Business Dev" },
    { img: helene, name: "Hélène Gilles", position: "HR" },
    { img: jora, name: "Jora", position: "Mobile" },
    { img: andrew, name: "X", position: "Ethical Hacker Cybersecurity" },
    { img: jim, name: "Jim Currier", position: "Advisor" },
    { img: fedrik, name: "Frédéric Bilocq", position: "Advisor" },
  ];
  return (
    <section className={styles.teamContainer}>
      <div className={styles.wrapper}>
        <video
          src={TeamBg}
          autoPlay
          muted
          loop
          className={styles.video}
        ></video>
        <h2 className={styles.heading}>team</h2>
        <div className={styles.team}>
          {teams.map((el, i) => (
            <div className={styles.teamMember} key={i}>
              <img src={el.img} alt="#" className={styles.image} />
              <p className={styles.name}>{el.name}</p>
              <p className={styles.position}>{el.position}</p>
            </div>
          ))}
        </div>
      </div>{" "}
      <div className={styles.overlay}></div>
    </section>
  );
};

export default Team;
