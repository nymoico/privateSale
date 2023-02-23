import React from "react";
import styles from "./styles.module.css";
import {
  takeAllocationBg,
  takeAllocationMobile,
} from "../../assets/images/images";

const TokenAlocation = () => {
  return (
    <section className={styles.takeAllocationContainer}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>token allocation</h2>
      </div>
      <img src={takeAllocationBg} alt="#" className={styles.image} />
      <img
        src={takeAllocationMobile}
        alt="#"
        className={`${styles.image} ${styles.mobileImage}`}
      />
    </section>
  );
};

export default TokenAlocation;
