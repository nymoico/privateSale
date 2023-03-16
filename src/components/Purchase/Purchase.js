import { Web3Button } from "@web3modal/react";
import React, {useEffect, useState} from "react";
import BuyEth from "./BuyEth";
import EthCard from "./EthCard";
import styles from "./styles.module.css";
import UsdtCard from "./UsdtCard";
import {ethers} from "ethers"
import { useBalance, useAccount, useSigner, usePrepareContractWrite, useContractWrite } from 'wagmi'
import { ICOADDRESS, ICOABI } from "../../contractUtils/contractConfig";

const Purchase = () => {

  const { isConnected, address } = useAccount();

  

  const [claimable,setClaimable] = useState(0);
  const provider = new ethers.providers.JsonRpcProvider('https://billowing-proud-butterfly.bsc.discover.quiknode.pro/c0cbec7e2023692be00972bc02837556798db23d/')
  const contract = new ethers.Contract(ICOADDRESS,ICOABI,provider);

  useEffect(()=>{
    async function getClaimable(){
      const amount = await contract.userDeposits(address);
      console.log('claim')
      console.log(amount)
      setClaimable(ethers.utils.formatEther(amount))
    }
    if (isConnected)

    getClaimable()
  },[])
  return (
    <div className={styles.purchasingContainer}
    id="buyEthCard"
    >
      <h2 className={styles.title}> Buy NYMO Here</h2>
      <div className={styles.buttonContainer}>
        {/* <button className={`${styles.button} ${styles.connectWallet} `}>
          {" "}
          Connect Wallet
        </button> */}
        {/* <ConnectButton /> */}
        {/* <Web3Button/> */}
        <button className={`${styles.button} ${styles.claimable} `}>
          Claimable Balance : {claimable} NYMO
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
