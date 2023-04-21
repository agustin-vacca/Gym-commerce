import React, { useState } from "react";
import { Container } from "./FormReviewStyle";
import { useParams } from "react-router-dom";
import {useDispatch} from "react-redux"
import { createReview } from "../../../redux/actions";
import {useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";



const FormReview = () => {
    const {id} = useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const  {user}  = useAuth0();

    const [input, setInput] = useState({
        item: id,        
        opinion: "",
        rating: "",
        usuario: "",
    })
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const ver =(e)=>{
        console.log(user);
    }

    const handleSubmit = (e) => {
/*         setInput({
            ...input,
            usuario: user.name
        })

        e.preventDefault() 
       dispatch(createReview(input));
       setInput({
        opinion: "",
        estrellas: "",
       })
        navigate(`/detail/${id}`) */
   } 
    return (
        <Container>
            <button onClick={(e)=>ver(e)}>Ver Usuario</button>
            <div className="title"><p>Dejanos tu opinion</p></div>
            <div className="califica"><label>Califica este producto</label>
                <input 
                type="number"
                value={input.rating}
                name="rating"
                onChange={(e)=>handleChange(e)}
                title="rating"
                min="1" max="5"
                placeholder="1 to 5"/>
                </div>
                <div>
                <textarea  className="textarea"
                id="inputname"
                type="text"
                value={input.opinion}
                name="opinion"
                onChange={(e)=>handleChange(e)}
                title="opinion"         
                />  
                </div>
                <div className="divSubmitButton">
                {
                (input.estrellas !== "" && input.opinion !== "")
                ? <button id="submitButton"   onClick={(e)=>handleSubmit(e)}  type="submit">ENVIAR</button> 
                : <button id="submitButton"  disabled onClick={(e)=>handleSubmit(e)}  type="submit">ENVIAR</button>             
                }
            </div>
        </Container>
    )
}
export default FormReview;