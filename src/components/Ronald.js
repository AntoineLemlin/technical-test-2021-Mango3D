import React from "react";
import { useStyles } from "../styles/styles";
import RonaldImage from "../images/ronald.png";

const Ronald = () => {
  const styles = useStyles();

  return (
    <img
      src={RonaldImage}
      alt="Ronald_McDonald"
      className={styles.homepageImage}
    />
  );
};

export default Ronald;
