import axios from "axios";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "./constants";

// export const listCategories = async (dispatch) => {
//   dispatch({ type: CATEGORY_LIST_REQUEST });
//   try {
//     const { data } = await axios.get("/api/categories");
//     return dispatch({
//       type: CATEGORY_LIST_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     return dispatch({
//       type: CATEGORY_LIST_FAIL,
//       payload: error.message,
//     });
//   }
// };

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
