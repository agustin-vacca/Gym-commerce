import { GET_PRODUCTS, GET_PRODUCT_BY_ID, POST_PRODUCTS } from "./action-types";

const initialState = {
  products: [],
  allProducts: [],
  detail: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
      };
    case POST_PRODUCTS:
      return {
        ...state,
      };

    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        detail: action.payload,
      };

    default:
      return { ...state };
  }
};
export default reducer;
