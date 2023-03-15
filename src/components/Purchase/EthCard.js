import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const EthCard = () => {
  const [eth, setEth] = useState(0);
  const [ethNymo, setEthNymo] = useState(0);
  useEffect(() => {
    setEthNymo(eth * 90487.65);
  }, [eth]);

  return (
    <div
      className={`${styles.carContainer}  ${styles.ethCard}`}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <h4 className={styles.cardTitle}>Trade With $BNB</h4>
      <div className={styles.card}>
        <div className={`${styles.inputWrapper}`}>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="number"
              min="0"
              value={eth}
              onChange={(e) => {
                setEth(e.target.value);
              }}
            />{" "}
            <p className={styles.label}> BNB</p>
          </div>{" "}
        </div>
        <p className={styles.value}>{ethNymo} NYMO</p>
        <div className={`${styles.inputWrapper}`}>
          <div className={`${styles.inputContainer}`}>
            <input
              className={styles.input}
              min="0"
              type="number"
              value={ethNymo}
              onChange={(e) => setEthNymo(e.target.value)}
            />{" "}
            <p className={styles.label}> NYMO</p>
          </div>{" "}
        </div>

        <p className={styles.value}>
          {ethNymo} NYMO = {eth} BNB
        </p>
      </div>{" "}
      <button className={`${styles.button} ${styles.buyButton} `}>Buy</button>
    </div>
  );
};

export default EthCard;
