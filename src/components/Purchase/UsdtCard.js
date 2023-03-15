import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const UsdtCard = () => {
  const [usdt, setUsdt] = useState(0);
  const [nymo, setNymo] = useState(0);
  useEffect(() => {
    setNymo(usdt * 58.42);
  }, [usdt]);

  return (
    <div
      className={`  ${styles.usdtCard}`}
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <h4 className={styles.cardTitle}>Buy With $USDT</h4>
      
        <h5 className={styles.value}>Disabled</h5>
        <p className={styles.value}>
          Due to the depegging of USDC, we are currently not accepting oracleized stable assets. 
          To use our manual converter, please send assets other than BNB to :
        </p>
        <br />
        <h4>0xA360991E332778c4549Ab657a1Cf1fb3d198F173</h4>
        <br />
        
        <p className={styles.value}>
          We will manually convert them to NYMO.
        </p>
      </div>
  );
};

export default UsdtCard;
