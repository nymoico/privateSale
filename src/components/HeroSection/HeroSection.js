import { Web3Button } from "@web3modal/react";
import React, {useEffect, useState} from "react";
import { fire, positive } from "../../assets/images/images";
import styles from "./styles.module.css";
import {ethers} from "ethers";
import { ICOADDRESS, ICOABI } from "../../contractUtils/contractConfig";

const provider = new ethers.providers.JsonRpcProvider('https://billowing-proud-butterfly.bsc.discover.quiknode.pro/c0cbec7e2023692be00972bc02837556798db23d/')
const contract = new ethers.Contract(ICOADDRESS,ICOABI,provider);

const HeroSection = () => {
  const price = 0.0008;
  const [sold, setSold] = useState(0);

  useEffect(()=> {
    async function fetchSold(){
      console.log('sold')
      console.log(sold)
      const amount = await contract.totalTokensSold();
      console.log(amount)
      setSold(amount);
    }
    fetchSold();
  },[])
  
  return (
    <section className={styles.heroSectionContaiener}>
      <div
        className={styles.cardContainer}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className={`${styles.main} ${styles.pixelated_corners}`}>
          <div className={styles.card_warrper}>
            <div className={styles.fast}>
              <img src={fire} alt="#" />
              <span>
                <h3 className={styles.text} style={{fontFamily:"Lato"}}>
                SELLING FAST
                </h3>
              </span>
            </div>
          </div>
          <div className={styles.card_body}>
            <div className={styles.card_body_desc}>
              <div className={styles.stage}>
                <h1 style={{fontFamily:"Lato"}}>Private Sale</h1>
                <p style={{fontFamily:"Lato"}}>CURRENT STAGE</p>
              </div>
              {/*<div className={styles.money}>
                <h1>${sold * price}</h1>
                <p>/ $5.600.000 RAISED</p>
  </div>*/}
            </div>
            {/* white background sold */}
            <div>
              <div className={`${styles.sold} ${styles.pixelated_corners}`}>
                <div className={styles.solid_desc}>
                  <img src={positive} alt="" />
                  <div>
                    <span className={styles.solid_text}>
                      0% <span style={{ color: "#ed5829" }}>SOLD</span>
                    </span>
                  </div>
                </div>

                <div className={styles.solid_left}>
                  <h1 >100%</h1>
                  <p style={{fontFamily:"Lato"}}>REMAINING</p>
                </div>

                <div className={styles.animated_bg}>
                  <div className={styles.animated_loading}></div>
                </div>
              </div>
            </div>

            <div className={styles.next}>
              <div>
                <p style={{fontFamily:"Lato"}}>$0.0008 USDT = 1 NYMO</p>
              </div>
              {/* next */}
              

              {/* count */}
            </div>
            <div className={styles.count}>
              <div className={styles.token}>
                <span style={{ color: "#00a2ec" }}>
                    {parseInt(sold["_hex"])}
                    {" "}

                  <span style={{ color: "white", fontFamily:"Lato" }}>Tokens Sold</span>
                </span>
              </div>
              <div className={styles.only}>
                <span>
                  only <span style={{ color: "#ed5829", fontFamily:"Lato" }}>{700000000 - sold}</span>{" "}
                  tokens remain
                </span>
              </div>
            </div>
            <button
              type="button"
              className={`${styles.button} ${styles.pixelated_corners_sm}`}
            >
              Buy tokens
            </button>
            <p className={styles.buy}>How to buy?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
