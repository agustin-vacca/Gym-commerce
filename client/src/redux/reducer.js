import {
  FILTER_BY_CATEGORY,
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  ORDER_BY_NAME,
  ORDER_BY_PRICE,
} from "./action-types";

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

    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        detail: action.payload,
      };
    case ORDER_BY_NAME:
      console.log(state.products);
      let sortedArr =
        action.payload === "asc"
          ? state.products.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.products.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        products: sortedArr,
      };
    case ORDER_BY_PRICE:
      console.log(state.products);
      let sortedArr2 =
        action.payload === "asc"
          ? state.products.sort(function (a, b) {
              if (a.price > b.price) {
                return 1;
              }
              if (b.price > a.price) {
                return -1;
              }
              return 0;
            })
          : state.products.sort(function (a, b) {
              if (a.price > b.price) {
                return -1;
              }
              if (b.price > a.price) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        products: sortedArr2,
      };
    case FILTER_BY_CATEGORY:
      const allProducts = state.allProducts;
      const categoryFiltered =
        action.payload === "All"
          ? allProducts
          : allProducts.filter((el) => el.categoria[0].name === action.payload);
      return {
        ...state,
        products: categoryFiltered,
      };
    default:
      return { ...state };
  }
};
export default reducer;
