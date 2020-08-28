import React from "react";
import styles from "../../App.module.scss";

const Content = (props) => {
  return <div className={styles.mainSection}>{props.children}</div>;
};

export default Content;
