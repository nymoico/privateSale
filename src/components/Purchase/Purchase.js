import { Web3Button } from "@web3modal/react";
import React from "react";
import BuyEth from "./BuyEth";
import EthCard from "./EthCard";
import styles from "./styles.module.css";
import UsdtCard from "./UsdtCard";


const Purchase = () => {
  return (
    <div className={styles.purchasingContainer}>
      <h2 className={styles.title}> Buy $ETH Here</h2>
      <div className={styles.buttonContainer}>
        {/* <button className={`${styles.button} ${styles.connectWallet} `}>
          {" "}
          Connect Wallet
        </button> */}
        {/* <ConnectButton /> */}
        {/* <Web3Button/> */}
        <button className={`${styles.button} ${styles.claimable} `}>
          Claimable Balance : 0 NYMO
        </button>
      </div>

      <div className={styles.cardContainer}>
        <UsdtCard />
        <EthCard />
        <BuyEth />
      </div>
    </div>
  );
};

export default Purchase;
