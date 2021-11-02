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
import { useLocation } from "react-router";

const View = (props) => {
  const styles = useStyles();
  const { state, dispatch } = useContext(Store);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});

  const addToOrderHandler = () => {
    addToOrder(dispatch, { ...product, quantity });
  };

  const cancelOrRemoveFromOrder = () => {
    removeFromOrder(dispatch, product);
  };
  const {
    products,
    loading: loadingProducts,
    error: errorProducts,
  } = state.productList;

  const { itemsPrice, orderItems, itemsCount, totalPrice, discountPrice } =
    state.order;

  useEffect(() => {
    listProducts(dispatch);
  }, [dispatch]);

  const previewOrderHandler = () => {
    props.history.push("/review");
  };

  const previewProduct = () => {
    props.history.push("/view");
  };

  return (
    <Fade in={true}>
      <Box className={styles.root}>
        <Box className={[styles.header]}>
          <Button
            onClick={() => {
              clearOrder(dispatch);
              props.history.push("/choose");
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
            {}
          </Typography>
        </Box>
        <Box></Box>
      </Box>
    </Fade>
  );
};

export default View;
