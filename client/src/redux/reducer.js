import {
  FILTER_BY_CATEGORY,
  GET_CATEGORIES,
  GET_REVIEWS,
  GET_PRODUCTS,
  GET_PRODUCTS_BY_NAME,
  GET_PRODUCT_BY_ID,
  ORDER_BY_NAME,
  ORDER_BY_PRICE,
  FILTER_REVIEWS,
  POST_REVIEW,
  DELETE_REVIEW,
} from "./action-types";

const initialState = {
  categories: [],
  reviews: [],
  allReviews: [],
  products: [],
  allProducts: [],
  productsOrder: [],
  detail: [],
  user: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        allReviews: action.payload,
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        detail: action.payload,
      };
    case ORDER_BY_NAME:
      let sortedArr =
        action.payload === "alfAsc"
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
        action.payload === "priceAsc"
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
    case FILTER_REVIEWS:
      const allReviews = state.allReviews;
      const reviewsFiltered = allReviews.filter(
        (el) => el.productos[0].id === Number(action.payload)
      );
      return {
        ...state,
        reviews: reviewsFiltered,
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
    case GET_PRODUCTS_BY_NAME:
      return {
        ...state,
        products: action.payload,
      };
    case POST_REVIEW:
      return {
        ...state,
      };
    case DELETE_REVIEW:
      return {
        ...state,
        reviews: action.payload,
        allReviews: action.payload,
      };
    default:
      return { ...state };
  }
};
export default reducer;
