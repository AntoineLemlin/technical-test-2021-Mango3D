import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Fade,
  List,
  ListItem,
  TextField,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import React, { useContext, useEffect, useState } from "react";
import { Store } from "../Store";
import { useStyles } from "../styles/styles";
import {
  addToOrder,
  listProducts,
  removeFromOrder,
  clearOrder,
  clearItemFromOrder,
} from "../actions";

const ReviewScreen = (props) => {
  const styles = useStyles();
  const { state, dispatch } = useContext(Store);
  const [quantity, setQuantity] = useState(1);

  const validateOrder = () => {
    clearOrder(dispatch);
    props.history.push("/validation");
  };
  const { itemsPrice, orderItems, totalPrice, discountPrice, prepareTime } =
    state.order;

  useEffect(() => {
    listProducts(dispatch);
  }, [dispatch]);

  return (
    <Fade in={true}>
      <Box className={styles.root}>
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
              <Card className={[styles.card, styles.column, styles.greyish]}>
                <Box className={[styles.row, styles.marginLeftAuto]}>
                  <Button
                    className={styles.marginLeftAuto}
                    onClick={() => clearItemFromOrder(dispatch, orderItem)}
                  >
                    <DeleteIcon className={styles.reviewIcon} />
                  </Button>
                </Box>
                <Box className={[styles.row, styles.fullWidth]}>
                  <CardMedia
                    component="img"
                    alt={orderItem.name}
                    image={orderItem.image}
                    className={styles.mediaHamburger}
                  />
                  <CardContent className={[styles.content, styles.between]}>
                    <Typography
                      gutterBottom
                      variant="body2"
                      color="textPrimary"
                      component="p"
                    >
                      {orderItem.name}
                    </Typography>
                    <Box className={[styles.cardFooter, styles.row]}>
                      <Box
                        className={[
                          styles.quantity,
                          styles.row,
                          styles.marginRightQuantity,
                        ]}
                      >
                        <Button
                          variant="contained"
                          color="grey"
                          disabled={orderItem.quantity === 1}
                          onClick={() => removeFromOrder(dispatch, orderItem)}
                          style={{
                            maxWidth: "30px",
                            maxHeight: "30px",
                            minWidth: "30px",
                            minHeight: "30px",
                          }}
                        >
                          <RemoveIcon className={styles.reviewIcon} />
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
                          type="tel"
                          variant="filled"
                          min={1}
                          value={orderItem.quantity}
                        />
                        <Button
                          variant="contained"
                          color="grey"
                          onClick={() =>
                            addToOrder(dispatch, { ...orderItem, quantity })
                          }
                          style={{
                            maxWidth: "30px",
                            maxHeight: "30px",
                            minWidth: "30px",
                            minHeight: "30px",
                          }}
                        >
                          <AddIcon className={styles.reviewIcon} />
                        </Button>
                      </Box>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {orderItem.price} $
                      </Typography>
                    </Box>
                  </CardContent>
                </Box>
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
