import axios from "axios";
import {
  ORDER_ADD_ITEM,
  ORDER_CLEAR,
  ORDER_REMOVE_ITEM,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "./constants";

export const listProducts = async (dispatch) => {
  dispatch({ type: PRODUCT_LIST_REQUEST });
  try {
    const { data } = await axios.get("/api/products");
    return dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    return dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.message,
    });
  }
};

export const addToOrder = async (dispatch, item) => {
  return dispatch({
    type: ORDER_ADD_ITEM,
    payload: item,
  });
};

export const removeFromOrder = async (dispatch, item) => {
  return dispatch({
    type: ORDER_REMOVE_ITEM,
    payload: item,
  });
};

export const clearOrder = async (dispatch) => {
  return dispatch({
    type: ORDER_CLEAR,
  });
};
