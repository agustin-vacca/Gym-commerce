import axios from "axios";
import { GET_PRODUCTS, GET_PRODUCT_BY_ID } from "./action-types";

export function getProducts() {
  return async function(dispatch) {
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
  return async function(dispatch) {
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
  return async function() {
    let response = await axios.post(
      "http://localhost:3001/productos/create",
      obj
    );
    console.log(response);
    return response.data.message;
  };
};
