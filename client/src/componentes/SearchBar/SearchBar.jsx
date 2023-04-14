import React, { useState } from "react";
import { SearchBarDiv } from "./SearchBarStyle";

export default function SearchBar() {
  /*  const dispatch = useDispatch() */
  // eslint-disable-next-line
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
          className="input"
          type="text"
          onChange={(e) => handleInputChange(e)}
        />
        {/*         <button 
        className="button"
        type="submit" 
        onClick={(event) => handleSubmit(event)} >
        Search</button> */}
      </div>
    </SearchBarDiv>
  );
}
