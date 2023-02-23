import React, { useRef, useEffect, useState } from "react";
import styles from "./styles.module.css";
const Line = ({ hide }) => {
  const lineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={lineRef}
      className={`${styles.line} ${isVisible && styles.lineAnimation} ${
        hide && styles.hide
      }`}
    >
      <span className={styles.rightCircle}></span>{" "}
      <span
        className={`${styles.leftCircle} ${isVisible && styles.leftAnimation}`}
      ></span>
    </div>
  );
};

export default Line;
