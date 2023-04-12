import axios from "axios";
import { GET_PRODUCTS} from "./action-types";


export function getProducts(){
    return async function(dispatch) {
        try {
        let json = await axios.get("http://localhost:3001/productos");
        return dispatch({
            type: GET_PRODUCTS,
            payload: json.data
        })
    } catch (error){
        console.log(error);
    }
    }
}