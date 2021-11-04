import React from "react";
import { Box, Card, CardActionArea, Typography } from "@material-ui/core";
import { useStyles } from "../styles/styles";
import Logo from "../components/Logo";
import Ronald from "../components/Ronald";

const HomeScreen = (props) => {
  const styles = useStyles();
  return (
    <Card>
      <Box className={[styles.root, styles.yellow, styles.center]}>
        <Logo large></Logo>
        <Ronald />
        <Box className={[styles.main, styles.center]}>
          <Typography className={styles.greyText} component="h5" variant="h5">
            Are you hungry?
          </Typography>
          <Typography className={[styles.greyText]} component="h6" variant="h6">
            Ronald McDonald will deliver you <br /> a paradise for the palate
          </Typography>
        </Box>
        <Box className={(styles.center, styles.order)}>
          <CardActionArea onClick={() => props.history.push("/choose")}>
            <Typography component="h6" variant="h6">
              Let's order a meal
            </Typography>
          </CardActionArea>
        </Box>
      </Box>
    </Card>
  );
};

export default HomeScreen;
