import axios from "axios";
import {
  FILTER_BY_CATEGORY,
  GET_CATEGORIES,
  GET_PRODUCTS,
  GET_PRODUCTS_BY_NAME,
  GET_PRODUCT_BY_ID,
  GET_USERS,
  ORDER_BY_NAME,
  ORDER_BY_PRICE,
  POST_PRODUCTS,
  POST_USERS,
  GET_REVIEWS,
  FILTER_REVIEWS,
  POST_REVIEW,
  DELETE_ITEM_CARRITO,
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

export function getCategories() {
  return async function (dispatch) {
    try {
      let json = await axios.get("http://localhost:3001/categorias");
      return dispatch({
        type: GET_CATEGORIES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getReviews() {
  return async function (dispatch) {
    try {
      let json = await axios.get("http://localhost:3001/reviews");
      return dispatch({
        type: GET_REVIEWS,
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
        payload: response.data,
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
export function filterReviewsByProduct(payload) {
  return {
    type: FILTER_REVIEWS,
    payload,
  };
}

export function getProductsbyName(name) {
  return async function (dispatch) {
    try {
      let json = await axios.get(
        `http://localhost:3001/productos/?name=${name}`
      );
      return dispatch({
        type: GET_PRODUCTS_BY_NAME,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUsers() {
  return async function (dispatch) {
    try {
      let json = await axios.get("http://localhost:3001/usuarios");
      return dispatch({
        type: GET_USERS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const createReview = (obj) => {
  console.log(obj);
  return async function (dispatch) {
    try {
      let response = await axios.post(
        "http://localhost:3001/reviews/create",
        obj
      );
      console.log(response);
      return dispatch({
        type: POST_REVIEW,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createUsers = (obj) => {
  console.log(obj);
  return async function (dispatch) {
    try {
      let response = await axios.post(
        "http://localhost:3001/usuarios/create",
        obj
      );
      console.log(response);
      return dispatch({
        type: POST_USERS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function deleteReview(id){
  return async function() {
      try{       
      const response = await axios.delete("http://localhost:3001/reviews/"+id)
      return response
  } catch (error){
      console.log(error);
  }
  }
} 
export function deleteItemCarrito(items){
  return ({
    type: DELETE_ITEM_CARRITO,
    payload: items,
  });
} 