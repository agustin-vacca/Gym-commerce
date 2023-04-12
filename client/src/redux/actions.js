import axios from "axios";
import { GET_CHARACTERS} from "./action-types";


export function getCharacters(){
    return async function(dispatch) {
        try {
        let json = await axios.get("https://jsonplaceholder.typicode.com/users");
        return dispatch({
            type: GET_CHARACTERS,
            payload: json.data
        })
    } catch (error){
        console.log(error);
    }
    }
}