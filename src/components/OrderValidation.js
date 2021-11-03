import React from "react";
import { Box, Card, CardActionArea, Typography } from "@material-ui/core";
import { useStyles } from "../styles/styles";

const OrderValidation = (props) => {
  const styles = useStyles();
  return (
    <Card>
      <Box className={[styles.root, styles.yellow, styles.center]}>
        <Box className={[styles.main, styles.center]}>
          <Typography className={styles.greyText} component="h2" variant="h2">
            Order is validated !
          </Typography>
        </Box>
        <Box className={(styles.center, styles.order)}>
          <CardActionArea onClick={() => props.history.push("/")}>
            <Typography component="h6" variant="h6">
              Go back to homescreen
            </Typography>
          </CardActionArea>
        </Box>
      </Box>
    </Card>
  );
};

export default OrderValidation;
