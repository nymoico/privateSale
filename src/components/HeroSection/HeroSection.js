import { Web3Button } from "@web3modal/react";
import React from "react";
import { fire, positive } from "../../assets/images/images";
import styles from "./styles.module.css";

const HeroSection = () => {
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
                <span className={styles.text}>PRESALE</span>
                SELLING FAST
              </span>
            </div>
          </div>
          <div className={styles.card_body}>
            <div className={styles.card_body_desc}>
              <div className={styles.stage}>
                <h1>Private Sale</h1>
                <p>CURRENT STAGE</p>
              </div>
              <div className={styles.money}>
                <h1>$0</h1>
                <p>/ $5.600.000 RAISED</p>
              </div>
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
                  <h1>100%</h1>
                  <p>REMAINING</p>
                </div>

                <div className={styles.animated_bg}>
                  <div className={styles.animated_loading}></div>
                </div>
              </div>
            </div>

            <div className={styles.next}>
              <div>
<<<<<<< HEAD
                <p>$0.008 USDT = 1 NYMO</p>
=======
                <p>$0.008 USDT = 1 $NYMO</p>
>>>>>>> 97a14d09b91183f98852124984a55169c209cfd9
              </div>
              {/* next */}
              

              {/* count */}
            </div>
            <div className={styles.count}>
              <div className={styles.token}>
                <span style={{ color: "#00a2ec" }}>
                  0{" "}
                  <span style={{ color: "white" }}>Tokens Sold</span>
                </span>
              </div>
              <div className={styles.only}>
                <span>
                  only <span style={{ color: "#ed5829" }}>700000000</span>{" "}
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
