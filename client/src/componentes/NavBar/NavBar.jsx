import React from "react";
import style from "./NavBar.module.css"
import { useState } from "react";


export default function NavBar(){
/*  const dispatch = useDispatch() */
    const [name, setName] = useState("")

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }


     function handleSubmit(event) {
/*         event.preventDefault()
        dispatch(searchCountryName(name)) */
    } 


    return (
        <div className={style.allNavBar}>
            <input 
            className={style.input}
            type="text"
            placeholder="Search..."
            onChange={(e) => handleInputChange(e)}
            />
            <button 
            className={style.button}
            type="submit" 
            onClick={(event) => handleSubmit(event)} >
            Search</button>
    
        </div>
    )
}
