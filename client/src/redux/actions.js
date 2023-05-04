import axios from "axios";
import {
  DELETE_ITEM_CARRITO,
  DELETE_REVIEW,
  FILTER_BY_CATEGORY,
  FILTER_REVIEWS,
  GET_ADMIN_PRODUCTS,
  GET_CATEGORIES,
  GET_PRODUCTS,
  GET_PRODUCTS_BY_NAME,
  GET_PRODUCT_BY_ID,
  GET_REVIEWS,
  GET_USERS,
  GET_USER_BY_ID,
  ORDER_BY_NAME,
  ORDER_BY_PRICE,
  POST_PRODUCTS,
  POST_REVIEW,
  POST_USERS,
  PUT_ADMIN_USER,
  FILTER_BY_ADMIN
} from "./action-types";


export const ApiUrl = "https://deployapi-p7icb5ugb-santiaguero91.vercel.app"


export function getProducts() {
  return async function (dispatch) {
    try {
      let json = await axios.get(`${ApiUrl}/productos`);
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
      const json = await axios.get(`${ApiUrl}/productos/${id}`);
      return dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUserById(id) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`${ApiUrl}/usuarios/${id}`);
      return dispatch({
        type: GET_USER_BY_ID,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterByAdmin() {
  return async function (dispatch) {
    try {
      let json = await axios.get(`${ApiUrl}/usuarios`);
      const response = json.data.filter(e => e.admin === true )
      //console.log("esto es el response",response)
      return dispatch({
        type: FILTER_BY_ADMIN,
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export function getCategories() {
  return async function (dispatch) {
    try {
      let json = await axios.get(`${ApiUrl}/categorias`);
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
      let json = await axios.get(`${ApiUrl}/reviews`);
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
        `${ApiUrl}/productos/create`,
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
        `${ApiUrl}/productos/?name=${name}`
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
      let json = await axios.get(`${ApiUrl}/usuarios`);
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
        `${ApiUrl}/reviews/create`,
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
  return async function (dispatch) {
    try {
      let response = await axios.post(
        `${ApiUrl}/usuarios/create`,
        obj
      );
      return dispatch({
        type: POST_USERS,
        payload: response.data,
      });
    } catch (error) {
      //console.log(error);
    }
  };
};

export function deleteReview(id) {
  return async function (dispatch) {
    try {
      await axios.delete(
        `${ApiUrl}/reviews/` + id
      );
      return dispatch({
        type: DELETE_REVIEW,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function deleteItemCarrito(items) {
  return {
    type: DELETE_ITEM_CARRITO,
    payload: items,
  };
}

export function getAllProductsAdmin() {
  return async function (dispatch) {
    try {
      let json = await axios.get(`${ApiUrl}/admin/`);
      return dispatch({
        type: GET_ADMIN_PRODUCTS,
        payload: json.data,
      });
    } catch (error) {}
  };
}

export function putAdminUser(id) {
  return async function (dispatch) {
    try {
      const response = await axios.put(`${ApiUrl}/usuarios/${id}`);
      console.log(response);
      return dispatch({
        type: PUT_ADMIN_USER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function putProduct(id , obj){
  console.log(obj);
  return async function() {
      try{       
      const response = await axios.put(`${ApiUrl}/productos/change/${id}` , {"stock": obj})
      return response
  } catch (error){
      console.log(error);
  }
  }
} 
