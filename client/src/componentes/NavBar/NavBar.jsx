import React from "react";
import style from "./NavBar.module.css"
import { useState } from "react";
import { NavBarDiv } from "./NavbarStyle";


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
    <NavBarDiv>
        <div className={style.divOne}>
        <input 
        className={style.input}
        type="text"
        onChange={(e) => handleInputChange(e)}
        />
        <button 
        className={style.button}
        type="submit" 
        onClick={(event) => handleSubmit(event)} >
        Search</button>
        </div>
    </NavBarDiv>
    
    


    )
}
