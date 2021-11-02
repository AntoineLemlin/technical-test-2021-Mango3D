import React from "react";
import { useStyles } from "../styles/styles";
import LogoImage from "../images/logo.png";

const Logo = () => {
  const styles = useStyles();
  return <img src={LogoImage} alt="Food Order" className={styles.largeLogo} />;
};

export default Logo;
