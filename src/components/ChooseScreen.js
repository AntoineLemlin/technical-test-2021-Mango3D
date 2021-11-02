import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Fade,
  Grid,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useContext, useEffect } from "react";
import { Store } from "./Store";
import { useStyles } from "../styles/styles";
import { listProducts } from "../actions";

const ChooseScreen = () => {
  const styles = useStyles();
  const { state, dispatch } = useContext(Store);
  const {
    products,
    loading: loadingProducts,
    error: errorProducts,
  } = state.productList;

  useEffect(() => {
    listProducts(dispatch);
  }, [dispatch]);

  return (
    <Fade in={true}>
      <Box className={styles.root}>
        <Typography
          gutterBottom
          className={styles.title}
          variant="h2"
          component="h2"
        >
          Main Menu
        </Typography>
        <List>
          {loadingProducts ? (
            <CircularProgress />
          ) : errorProducts ? (
            <Alert severity="error">{errorProducts}</Alert>
          ) : (
            products.map((product) => (
              <ListItem>
                <Card className={styles.card}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={product.name}
                      image={product.image}
                      className={styles.media}
                    />
                  </CardActionArea>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="body2"
                      color="textPrimary"
                      component="p"
                    >
                      {product.name}
                    </Typography>
                    <Box className={styles.cardFooter}>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {product.weight} g
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {product.price} $
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </ListItem>
            ))
          )}
        </List>
      </Box>
    </Fade>
  );
};

export default ChooseScreen;
