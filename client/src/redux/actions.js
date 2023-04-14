import axios from "axios";
import {
  FILTER_BY_CATEGORY,
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  ORDER_BY_NAME,
  ORDER_BY_PRICE,
  POST_PRODUCTS,
} from "./action-types";

export function getProducts() {
  return async function (dispatch) {
    try {
      let json = await axios.get("http://localhost:3001/productos");
      return dispatch({
        type: GET_PRODUCTS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getProductById(id) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`http://localhost:3001/productos/${id}`);
      return dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const createProducts = (obj) => {
  console.log(obj);
  return async function (dispatch) {
    try {
      let response = await axios.post(
        "http://localhost:3001/productos/create",
        obj
      );
      console.log(response);
      return dispatch({
        type: POST_PRODUCTS,
        /* payload: json.data, */
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}

export function orderByPrice(payload) {
  return {
    type: ORDER_BY_PRICE,
    payload,
  };
}
export function filterProductsByCategories(payload) {
  return {
    type: FILTER_BY_CATEGORY,
    payload,
  };
}
