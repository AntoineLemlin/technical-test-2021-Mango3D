import React, { createContext, useReducer } from "react";
import {
  ORDER_ADD_ITEM,
  ORDER_CLEAR,
  ORDER_REMOVE_ITEM,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants";

export const Store = createContext();

const initialState = {
  productList: { loading: true },
  order: {
    orderItems: [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, productList: { loading: true } };
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        productList: { loading: false, products: action.payload },
      };
    case PRODUCT_LIST_FAIL:
      return {
        ...state,
        productList: { loading: false, error: action.payload },
      };
    case ORDER_ADD_ITEM: {
      const item = action.payload;
      const existItem = state.order.orderItems.find(
        (x) => x.name === item.name
      );
      const orderItems = existItem
        ? state.order.orderItems.map((x) =>
            x.name === existItem.name ? item : x
          )
        : [...state.order.orderItems, item];

      const itemsCount = orderItems.reduce((a, c) => a + c.quantity, 0);
      const itemsPrice = orderItems
        .reduce((a, c) => a + c.quantity * c.price, 0)
        .toFixed(2);
      const discountPrice = orderItems
        .reduce((a, c) => a + c.quantity * ((c.price * c.discount) / 100), 0)
        .toFixed(2);
      const totalPrice = (itemsPrice - discountPrice).toFixed(2);

      const prepareTime = orderItems.reduce(
        (a, c) => a + c.prepareTime * c.quantity,
        0
      );

      return {
        ...state,
        order: {
          ...state.order,
          orderItems,
          discountPrice,
          totalPrice,
          itemsCount,
          itemsPrice,
          prepareTime,
        },
      };
    }
    case ORDER_REMOVE_ITEM: {
      const orderItems = state.order.orderItems.filter(
        (x) => x.name !== action.payload.name
      );

      const itemsCount = orderItems.reduce((a, c) => a + c.quantity, 0);
      const itemsPrice = orderItems
        .reduce((a, c) => a + c.quantity * c.price, 0)
        .toFixed(2);
      const discountPrice = orderItems
        .reduce((a, c) => a + c.quantity * ((c.price * c.discount) / 100), 0)
        .toFixed(2);
      const totalPrice = (itemsPrice - discountPrice).toFixed(2);

      const prepareTime = orderItems.reduce(
        (a, c) => a + c.prepareTime * c.quantity,
        0
      );

      return {
        ...state,
        order: {
          ...state.order,
          orderItems,
          discountPrice,
          totalPrice,
          itemsCount,
          itemsPrice,
          prepareTime,
        },
      };
    }

    case ORDER_CLEAR:
      return {
        ...state,
        order: {
          orderItems: [],
          discountPrice: 0,
          totalPrice: 0,
          itemsCount: 0,
        },
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
