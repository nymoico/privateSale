import { Web3Button } from "@web3modal/react";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { ethers } from "ethers";
import { ICOADDRESS, ICOABI } from "../../contractUtils/contractConfig";
import { useBalance, useAccount, useSigner, usePrepareContractWrite, useContractWrite } from 'wagmi'
import {approveSuccessToast,
approveFailToast,
ethAmountToast,
errorToast,
notConnectedToast,
notEnoughUsdtToast,
notEnoughBNBToast,
purchaseSuccessToast,
purchaseFailToast,    
usdTAmountToast} from "../../toastUtils/toasts";


const EthCard = () => {
  const [eth, setEth] = useState(0);
  const [ethNymo, setEthNymo] = useState(0);
  const [bnbPrice, setBnbPrice] =useState(0);
  const [nymoAmount, setNymoAmount] = useState(0);

  const { isConnected, address } = useAccount();
  const { data: signer, isError, } = useSigner();
  const balance = useBalance({
    address: address,
  });


    
  useEffect(()=>{

    console.log('is connected')
    console.log(isConnected);
    async function fetchEthPrice() {
    const provider = new ethers.providers.JsonRpcProvider('https://billowing-proud-butterfly.bsc.discover.quiknode.pro/c0cbec7e2023692be00972bc02837556798db23d/')
    const aggregatorV3InterfaceABI = [{ "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "description", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint80", "name": "_roundId", "type": "uint80" }], "name": "getRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "latestRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "version", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }]
    const addr = "0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE"
    const priceFeed = new ethers.Contract(addr, aggregatorV3InterfaceABI, provider)
    const price = await priceFeed.latestRoundData();

    console.log(Number((price.answer / Math.pow(10, 8))));
    setBnbPrice(Number((price.answer / Math.pow(10, 8))));
    }
    
    fetchEthPrice();        

      
  },[])

  const handleChange = async(e) => {
    console.log(e)
    setEth(e.target.value);
    const provider = new ethers.providers.JsonRpcProvider('https://billowing-proud-butterfly.bsc.discover.quiknode.pro/c0cbec7e2023692be00972bc02837556798db23d/')
    const contract = new ethers.Contract(ICOADDRESS,ICOABI,provider);
    const results = await contract.bnbBuyHelper(e.target.value);
    console.log(typeof ethers.utils.formatUnits(results))
    setEthNymo(parseFloat((ethers.utils.formatUnits(results))).toFixed(6));

  }
    
  const callContract = async() => {
   
      if(!isConnected){
        notConnectedToast();
        return
      }
     
      if(parseFloat(balance.data?.formatted) < ethNymo){
        notEnoughBNBToast();
        return
      }
        try{
        console.log(eth);
        const contract = new ethers.Contract(ICOADDRESS,ICOABI,signer);
        const amount = Math.floor(eth*1.02);
        console.log(amount);
        console.log(typeof amount);
        const callAmount = await contract.bnbBuyHelper(amount);
        console.log(callAmount)

        const  tx = await contract.buyWithBNB(eth,{value: callAmount})
        const receipt = await tx.wait();
        console.log(receipt);
    } catch(e){
        console.log('DEBUG')
        console.log(e.message)
        console.log('--------')
        errorToast(e.message);
    }
    }


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
              min="100"
              value={eth}
              onChange={
                handleChange
              }
            />{" "}
            <p className={styles.label}> NYMO</p>
          </div>{" "}
        </div>
        <p className={styles.value}>{ethNymo} BNB</p>
        <div className={`${styles.inputWrapper}`}>
          <div className={`${styles.inputContainer}`}>
            <input
              className={styles.input}
              min="0"
              type="number"
              value={ethNymo}
              disabled="true"
            />{" "}
            <p className={styles.label}> BNB</p>
          </div>{" "}
        </div>

        <p className={styles.value}>
          {eth} NYMO = {eth * 0.0008} USDT
        </p>
      </div>{" "}
      <div  style={{display:"flex", justifyContent:"center"}} >
      <button className={`${styles.button} ${styles.buyButton} `}onClick={callContract}>
        {isConnected?            
        "Buy Tokens" 
        :
        <Web3Button />}
      </button>
      
    </div>
    </div>
  );
};

export default EthCard;
