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
      
        <h5 style={{fontFamily:"Lato"}} className={styles.value}>Disabled</h5>
        <br/>
        <div style ={{display:"flex", justifyContent:"center"}}>
        <p  style ={{marginLeft:"25px", fontFamily:"Lato"}}className={styles.value}>
          Due to the depegging of USDC, we are currently not accepting oracleized stable assets. 
          To use ETH, USDT, USDC or other currencies, you can use our manual converter and bridging address, please send assets other than BNB to :
        </p>
        </div>
        <br />
        <h5 style ={{marginLeft:"25px"}} >0xA360991E332778c4549Ab657a1Cf1fb3d198F173</h5>
        <br />
        
        <p  style ={{marginLeft:"25px", fontFamily:"Lato"}} className={styles.value}>
          We will manually bridge and convert them to NYMO.
        </p>
      </div>
  );
};

export default UsdtCard;
