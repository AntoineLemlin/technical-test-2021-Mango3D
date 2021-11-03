import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Dialog,
  DialogTitle,
  Fade,
  List,
  ListItem,
  TextField,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";

import React, { useContext, useEffect, useState } from "react";
import { Store } from "./Store";
import { useStyles } from "../styles/styles";
import {
  addToOrder,
  clearOrder,
  listProducts,
  removeFromOrder,
} from "../actions";
import { PromiseProvider } from "mongoose";

const ChooseScreen = (props) => {
  const styles = useStyles();
  const { state, dispatch } = useContext(Store);
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState({});

  const closeHandler = () => {
    setIsOpen(false);
  };

  const productClickHandler = (p) => {
    setProduct(p);
    setIsOpen(true);
  };

  const addToOrderHandler = () => {
    addToOrder(dispatch, { ...product, quantity });
    setIsOpen(false);
  };

  const cancelOrRemoveFromOrder = () => {
    removeFromOrder(dispatch, product);
    setIsOpen(false);
  };
  const {
    products,
    loading: loadingProducts,
    error: errorProducts,
  } = state.productList;

  const {
    itemsPrice,
    orderItems,
    itemsCount,
    totalPrice,
    discountPrice,
    viewProduct,
  } = state.order;

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
        <Dialog
          maxWidth="xs"
          fullWidth={true}
          open={isOpen}
          onClose={closeHandler}
        >
          <DialogTitle className={styles.center}>
            Add {product.name}
          </DialogTitle>
          <Box className={[styles.row, styles.center]}>
            <Button
              variant="contained"
              color="primary"
              disabled={quantity === 1}
              onClick={(e) => quantity > 1 && setQuantity(quantity - 1)}
            >
              <RemoveIcon />
            </Button>
            <TextField
              inputProps={{ className: styles.largeInput }}
              InputProps={{
                bar: true,
                inputProps: {
                  className: styles.largeInput,
                },
              }}
              className={(styles.largeNumber, styles.marginAuto)}
              type="number"
              variant="filled"
              min={1}
              value={quantity}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => setQuantity(quantity + 1)}
            >
              <AddIcon />
            </Button>
          </Box>
          <Box className={[styles.row, styles.around]}>
            <Button
              onClick={cancelOrRemoveFromOrder}
              variant="contained"
              size="large"
              className={styles.largeButton}
            >
              {orderItems.find((x) => x.name === product.name)
                ? "Remove From Order"
                : "Cancel"}
            </Button>

            <Button
              onClick={addToOrderHandler}
              variant="contained"
              color="primary"
              size="large"
              className={styles.largeButton}
            >
              Add
            </Button>
          </Box>
        </Dialog>
        <Box className={[styles.header]}>
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
        <List className={styles.list}>
          {loadingProducts ? (
            <CircularProgress />
          ) : errorProducts ? (
            <Alert severity="error">{errorProducts}</Alert>
          ) : (
            products.map((product) => (
              <ListItem>
                <Card className={styles.card}>
                  <CardActionArea className={styles.row}>
                    <CardMedia
                      component="img"
                      alt={product.name}
                      image={product.image}
                      className={styles.media}
                      onClick={() => previewProduct(product.id)}
                    />
                    <CardContent className={styles.content}>
                      <Button onClick={() => productClickHandler(product)}>
                        <AddShoppingCart />
                      </Button>
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
                          {product.price} $
                        </Typography>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </ListItem>
            ))
          )}
        </List>
        <Box className={[styles.bordered, styles.infoContainer]}>
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
