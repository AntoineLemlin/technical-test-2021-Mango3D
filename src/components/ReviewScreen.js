import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogTitle,
  Fade,
  List,
  ListItem,
  TextField,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import EditIcon from "@material-ui/icons/Edit";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import React, { useContext, useEffect, useState } from "react";
import { Store } from "./Store";
import { useStyles } from "../styles/styles";
import {
  addToOrder,
  listProducts,
  removeFromOrder,
  clearOrder,
} from "../actions";
import { PromiseProvider } from "mongoose";

const ReviewScreen = (props) => {
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

  const cancelOrRemoveFromOrder = (p) => {
    removeFromOrder(dispatch, p);
  };

  const validateOrder = () => {
    clearOrder(dispatch);
    props.history.push("/validation");
  };
  const { itemsPrice, orderItems, totalPrice, discountPrice, prepareTime } =
    state.order;

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
              onClick={addToOrderHandler}
              variant="contained"
              color="primary"
              size="large"
              className={styles.largeButton}
            >
              Edit
            </Button>
          </Box>
        </Dialog>
        <Box className={[styles.header, styles.greyish]}>
          <Button
            onClick={() => {
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
            Your order
          </Typography>
        </Box>
        <List className={[styles.list, styles.greyish]}>
          {orderItems.map((orderItem) => (
            <ListItem>
              <Card
                style={{ width: "100%" }}
                className={[styles.card, styles.column, styles.greyish]}
              >
                <Box className={[styles.row, styles.marginLeftAuto]}>
                  <Button
                    className={styles.marginLeftAuto}
                    onClick={() => productClickHandler(orderItem)}
                  >
                    <EditIcon />
                  </Button>
                  <Button
                    className={styles.marginLeftAuto}
                    onClick={() => cancelOrRemoveFromOrder(orderItem)}
                  >
                    <RemoveIcon />
                  </Button>
                </Box>
                <CardActionArea
                  onClick={() => previewProduct(orderItem.id)}
                  className={styles.row}
                >
                  <CardMedia
                    component="img"
                    alt={orderItem.name}
                    image={orderItem.image}
                    className={styles.media}
                  />
                  <CardContent className={styles.content}>
                    <Typography
                      gutterBottom
                      variant="body2"
                      color="textPrimary"
                      component="p"
                    >
                      {orderItem.name}
                    </Typography>
                    <Box className={[styles.cardFooter, styles.row]}>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {orderItem.quantity} X {orderItem.price} $
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </ListItem>
          ))}
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
            <Box className={styles.infoOrder}>
              <Box>Prepare Time:</Box>{" "}
              <Box className={styles.setToRight}>
                {prepareTime ? prepareTime : 0} mins
              </Box>
            </Box>
          </Box>
          <Button
            onClick={validateOrder}
            variant="contained"
            color="primary"
            disabled={orderItems.length === 0}
            className={styles.largeButton}
          >
            Checkout & Payement <ArrowRightAltIcon />
          </Button>
        </Box>
      </Box>
    </Fade>
  );
};

export default ReviewScreen;
