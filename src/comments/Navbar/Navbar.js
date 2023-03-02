import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { logo } from "../../assets/images/images";
import styles from "./styles.module.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const navItems = [
    {
      item: "Home",
      to: "https://www.nymo.io/",
    },
    {
      item: "About",
      to: "https://www.nymo.io/nymo",
    },
    {
      item: "The Unbanked",
      to: "https://www.nymo.io/theunbanked",
    },    
    {
      item: "Contact",
      to: "https://www.nymo.io/contact",
    },
  ];
  return (
    <section className={styles.navbarContaner}>
      <div className={styles.navbar}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="#" className={styles.logo} />
        </div>
        <RxHamburgerMenu
          className={styles.hamburger}
          onClick={() => setSidebar((prev) => !prev)}
        />
        {!sidebar && (
          <div className={`${styles.navItems} `}>
            {navItems.map((el, i) => (
              <Link to={el.to} key={i} className={styles.navItem}>
                {el.item}
              </Link>
            ))}
          </div>
        )}
        <div className={`${styles.mobileNav} ${sidebar && styles.sidebar}`}>
          {sidebar && (
            <TfiClose
              className={styles.close}
              onClick={() => setSidebar((prev) => !prev)}
            />
          )}
          {navItems.map((el, i) => (
            <Link
              to={el.to}
              key={i}
              className={styles.navItem}
              onClick={() => setSidebar((prev) => !prev)}
            >
              {el.item}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.navbar}>
        <p className={styles.tagline}>
          blockchain remittances, financial freedom achieved.
        </p>
      </div>
    </section>
  );
};

export default Navbar;
