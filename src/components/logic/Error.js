import React from "react";
import styles from "../../App.module.scss";

const Error = ({ error }) => {
  return <div className={styles.error}>{error}</div>;
};

export default Error;
