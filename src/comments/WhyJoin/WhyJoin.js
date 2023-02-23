import React from "react";
import styles from "./styles.module.css";

const WhyJoin = () => {
  return (
    <section className={styles.whyJoinContainer}>
      <div className={styles.whyJoin}>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            By participating in our ICO, you will have the opportunity to
            purchase Nymo tokens, which will give you access to a range of
            benefits and advantages, linked to the revenu of Nymo
          </p>
          <p className={styles.text}>
            {" "}
            First, as we grow and evolve, the value of your tokens is likely to
            increase, providing you with a potential return on investment,
            thanks{" "}
            <strong>to our unique transaction token burning process.</strong>
          </p>
          <p className={styles.text}>
            Finally, by buying our tokens, you will be supporting the
            development of a platform that has the potential to make a real
            difference in the lives of millions of people.
          </p>
          <p className={styles.text}>
            Overall, our ICO is an opportunity for you to be a part of something
            truly groundbreaking, and to benefit from the potential of
            blockchain technology to revolutionize the way we send money to one
            another. So don't miss out, invest in Nymo today!.
          </p>
        </div>
        <h2
          className={styles.heading}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Why joining us ?
        </h2>
      </div>
    </section>
  );
};

export default WhyJoin;
