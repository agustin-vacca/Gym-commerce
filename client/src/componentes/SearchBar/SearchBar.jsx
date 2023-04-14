import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { SearchBarDiv } from "./SearchBarStyle";

export default function SearchBar() {
  /*  const dispatch = useDispatch() */
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  /* function handleSubmit(event) {
            event.preventDefault()
    dispatch(searchCountryName(name))  
    } 
    */
  return (
    <SearchBarDiv>
      <div>
        <input
          className="search"
          type="text"
          onChange={(e) => handleInputChange(e)}
        />
        <BiSearch className="lupa" size={40} />
        {/*         <button 
        className="button"
        type="submit" 
        onClick={(event) => handleSubmit(event)} >
        Search</button> */}
      </div>
    </SearchBarDiv>
  );
}
