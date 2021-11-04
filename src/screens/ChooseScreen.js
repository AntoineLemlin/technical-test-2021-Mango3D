import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Fade,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";

import React, { useContext, useEffect, useState } from "react";
import { Store } from "../Store";
import { useStyles } from "../styles/styles";
import { addToOrder, clearOrder, listProducts } from "../actions";

const ChooseScreen = (props) => {
  const styles = useStyles();
  const { state, dispatch } = useContext(Store);
  const [quantity, setQuantity] = useState(1);

  const {
    products,
    loading: loadingProducts,
    error: errorProducts,
  } = state.productList;

  const { itemsPrice, orderItems, totalPrice, discountPrice } = state.order;

  useEffect(() => {
    listProducts(dispatch);
  }, [dispatch]);

  const previewOrderHandler = () => {
    props.history.push("/review");
  };

  const previewProduct = (p) => {
    props.history.push({ pathname: "/view", search: "?" + p });
  };

  return (
    <Fade in={true}>
      <Box className={styles.root}>
        <Box className={[styles.header, styles.greyish]}>
          <Button
            onClick={() => {
              clearOrder(dispatch);
              props.history.push("/");
            }}
            className={styles.cancel}
          >
            <ArrowBackIosIcon className={styles.arrowIcon} />
          </Button>
          <Typography
            gutterBottom
            className={styles.title}
            variant="h6"
            component="h6"
          >
            Burgers Menu
          </Typography>
        </Box>
        <List className={[styles.list, styles.greyish]}>
          {loadingProducts ? (
            <CircularProgress />
          ) : errorProducts ? (
            <Alert severity="error">{errorProducts}</Alert>
          ) : (
            products.map((product) => (
              <ListItem key={product.id}>
                <Card
                  style={{ width: "100%" }}
                  className={[styles.card, styles.column, styles.greyish]}
                >
                  <CardActionArea
                    onClick={() => previewProduct(product.id)}
                    className={styles.row}
                  >
                    <CardMedia
                      component="img"
                      alt={product.name}
                      image={product.image}
                      className={styles.mediaHamburger}
                    />
                    <CardContent className={styles.content}>
                      <Typography
                        gutterBottom
                        variant="body2"
                        color="textPrimary"
                        component="p"
                        className={styles.productName}
                      >
                        {product.name}
                      </Typography>
                      <Box className={styles.cardFooter}>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {product.price} $
                        </Typography>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                  <Button
                    className={styles.marginLeftAuto}
                    onClick={() => {
                      addToOrder(dispatch, { ...product, quantity });
                    }}
                  >
                    <AddShoppingCart className={styles.chooseCartIcon} />
                  </Button>
                </Card>
              </ListItem>
            ))
          )}
        </List>
        <Box className={styles.infoContainer}>
          <Box className={[styles.space]}>
            <Box className={styles.infoOrder}>
              <Box>Items:</Box>{" "}
              <Box className={styles.setToRight}>
                ${itemsPrice ? itemsPrice : 0}
              </Box>
            </Box>
            <Box className={styles.infoOrder}>
              <Box>Discount:</Box>{" "}
              <Box className={styles.setToRight}>
                ${discountPrice ? discountPrice : 0}
              </Box>
            </Box>
            <Box className={styles.infoOrder}>
              <Box>Cost:</Box>{" "}
              <Box className={styles.setToRight}>
                ${totalPrice ? totalPrice : 0}
              </Box>
            </Box>
          </Box>
          <Button
            onClick={previewOrderHandler}
            variant="contained"
            color="primary"
            disabled={orderItems.length === 0}
            className={styles.largeButton}
          >
            Review my cart
          </Button>
        </Box>
      </Box>
    </Fade>
  );
};

export default ChooseScreen;
