import {
  Box,
  Button,
  CircularProgress,
  Fade,
  TextField,
  Typography,
} from "@material-ui/core";

import { Alert } from "@material-ui/lab";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHamburger,
  faWeightHanging,
  faClock,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import { Store } from "./Store";
import { useStyles } from "../styles/styles";
import { addToOrder, listProducts, removeFromOrder } from "../actions";
import { PromiseProvider } from "mongoose";
import { useLocation } from "react-router";

const View = (props) => {
  const styles = useStyles();
  const { state, dispatch } = useContext(Store);
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const idProduct = location.search.substring(1);

  const addToOrderHandler = (product) => {
    addToOrder(dispatch, { ...product, quantity });
    props.history.push("/choose");
  };

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
        {loadingProducts ? (
          <CircularProgress />
        ) : errorProducts ? (
          <Alert severity="error">{errorProducts}</Alert>
        ) : (
          products.map((product) => {
            return product.id == idProduct ? (
              <>
                <Box
                  style={{
                    background: `url("${product.coverImage}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  className={[styles.header, styles.bgImage, styles.center]}
                >
                  <Button
                    onClick={() => {
                      props.history.push("/choose");
                    }}
                    className={styles.cancel}
                  >
                    <ArrowBackIosIcon className={styles.arrowIcon} />
                  </Button>
                  {console.log(product.coverImage)}
                </Box>
                <Box style={{ zIndex: 1 }} className={styles.viewMain}>
                  <Box className={styles.viewInfo}>
                    {product.discount > 0 ? (
                      <Typography
                        gutterBottom
                        className={styles.discount}
                        variant="h6"
                        component="h6"
                      >
                        {product.discount}% OFF
                      </Typography>
                    ) : (
                      ""
                    )}
                    <Typography
                      gutterBottom
                      className={styles.viewTitle}
                      variant="h2"
                      component="h2"
                    >
                      {product.name}
                    </Typography>
                    <Box className={styles.viewPrices}>
                      <Typography
                        gutterBottom
                        className={styles.viewPrice}
                        variant="h2"
                        component="h2"
                      >
                        {product.discount
                          ? product.price -
                            (product.discount * product.price) / 100
                          : product.price}
                      </Typography>
                      {product.discount ? (
                        <Typography
                          gutterBottom
                          className={styles.viewOldPrice}
                          variant="h2"
                          component="h2"
                        >
                          {product.price.toFixed(2)}
                        </Typography>
                      ) : (
                        ""
                      )}
                    </Box>
                    <Typography
                      className={styles.viewDescription}
                      gutterBottom
                      variant="h6"
                      component="h6"
                    >
                      {product.description}
                    </Typography>

                    <Box className={styles.burgerInfoContainer}>
                      <Box className={styles.burgerInfo}>
                        <Typography
                          className={styles.viewSize}
                          gutterBottom
                          variant="h6"
                          component="h6"
                        >
                          Size
                        </Typography>
                        <Box className={styles.row}>
                          <FontAwesomeIcon
                            style={{ marginRight: "5px" }}
                            icon={faHamburger}
                          />
                          <Typography
                            className={styles.viewSizeInfo}
                            gutterBottom
                            variant="h6"
                            component="h6"
                          >
                            {product.size}
                          </Typography>
                        </Box>
                      </Box>
                      <Box className={styles.burgerInfo}>
                        <Typography
                          className={styles.viewSize}
                          gutterBottom
                          variant="h6"
                          component="h6"
                        >
                          Weight
                        </Typography>
                        <Box className={styles.row}>
                          <FontAwesomeIcon
                            style={{ marginRight: "5px" }}
                            icon={faWeightHanging}
                          />

                          <Typography
                            className={styles.viewSizeInfo}
                            gutterBottom
                            variant="h6"
                            component="h6"
                          >
                            {product.weight}g
                          </Typography>
                        </Box>
                      </Box>
                      <Box className={styles.burgerInfo}>
                        <Typography
                          className={styles.viewSize}
                          gutterBottom
                          variant="h6"
                          component="h6"
                        >
                          Prepare Time
                        </Typography>
                        <Box className={styles.row}>
                          <FontAwesomeIcon
                            style={{ marginRight: "5px" }}
                            icon={faClock}
                          />
                          <Typography
                            className={
                              (styles.viewSizeInfo, styles.viewBurgerInfo)
                            }
                            gutterBottom
                            variant="h6"
                            component="h6"
                          >
                            {product.prepareTime} mins
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box className={styles.viewOrder}>
                      <Box
                        className={[styles.row, styles.center, styles.quantity]}
                      >
                        <Button
                          variant="contained"
                          color="grey"
                          disabled={quantity === 1}
                          onClick={(e) =>
                            quantity > 1 && setQuantity(quantity - 1)
                          }
                          style={{
                            maxWidth: "30px",
                            maxHeight: "30px",
                            minWidth: "30px",
                            minHeight: "30px",
                          }}
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
                          type="tel"
                          variant="filled"
                          min={1}
                          value={quantity}
                        />
                        <Button
                          variant="contained"
                          color="grey"
                          onClick={(e) => setQuantity(quantity + 1)}
                          style={{
                            maxWidth: "30px",
                            maxHeight: "30px",
                            minWidth: "30px",
                            minHeight: "30px",
                          }}
                        >
                          <AddIcon />
                        </Button>
                      </Box>
                      <Button
                        onClick={() => addToOrderHandler(product)}
                        variant="contained"
                        color="primary"
                        size="large"
                        className={styles.viewAddToCart}
                      >
                        <FontAwesomeIcon
                          style={{ marginRight: "5px" }}
                          icon={faShoppingCart}
                        />{" "}
                        Add to cart
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </>
            ) : (
              ""
            );
          })
        )}
      </Box>
    </Fade>
  );
};

export default View;
