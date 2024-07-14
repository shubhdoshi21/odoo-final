import React from "react";
import styles from "../module/loader.module.css";

const Loader = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.banterLoader}>
        <div className={styles.banterLoader__box}></div>
        <div className={styles.banterLoader__box}></div>
        <div className={styles.banterLoader__box}></div>
        <div className={styles.banterLoader__box}></div>
        <div className={styles.banterLoader__box}></div>
        <div className={styles.banterLoader__box}></div>
        <div className={styles.banterLoader__box}></div>
        <div className={styles.banterLoader__box}></div>
        <div className={styles.banterLoader__box}></div>
      </div>
    </div>
  );
};

export default Loader;
