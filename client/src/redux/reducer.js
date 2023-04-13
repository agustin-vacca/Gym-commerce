import { GET_PRODUCTS, POST_PRODUCTS } from "./action-types";

const initialState = {
  products: [],
  allProducts: [],
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

    default:
      return { ...state };
  }
};
export default reducer;
