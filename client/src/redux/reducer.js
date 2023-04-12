import { GET_CHARACTERS} from "./action-types";

const initialState = {
  characters: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {;
switch(action.type){
  case GET_CHARACTERS:
    return {
        ...state, 
        characters: action.payload,
        allCharacters: action.payload
  }
  default:
  return{...state}; 
}
}
export default reducer;
