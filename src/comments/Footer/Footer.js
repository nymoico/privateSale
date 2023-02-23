import React from "react";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <section className={styles.footerContainer}>
      <div className={styles.footer}>
        <p></p>
        <div>
          <p className={styles.text}> © 2009-2023 by AIDENTITY LTD</p>{" "}
          <p className={styles.text}>
            privacy - legal - gdpr - Anti Bribery and Corruption Policy
          </p>
          <p className={styles.text}>
            Nymo is registered trademark ® and under copyright ©.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
