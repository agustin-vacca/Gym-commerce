import { GET_PRODUCTS} from "./action-types";

const initialState = {
  products: [],
  allProducts: [],
};

const reducer = (state = initialState, action) => {;
switch(action.type){
  case GET_PRODUCTS:
    return {
        ...state, 
        products: action.payload,
        allProducts: action.payload
  }
  default:
  return{...state}; 
}
}
export default reducer;
