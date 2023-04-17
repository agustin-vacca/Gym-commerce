import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { getProductsbyName } from "../../redux/actions";
import { SearchBarDiv } from "./SearchBarStyle";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    dispatch(getProductsbyName(name));
    setName(" ");
  };

  return (
    <SearchBarDiv>
      <div className="comb">
        <button className="btn" type="submit" onClick={(e) => handleSubmit(e)}>
          <BiSearch className="lupa" size={30} />
        </button>
        <input
          className="search"
          type="text"
          onChange={(e) => handleChange(e)}
        />
      </div>
    </SearchBarDiv>
  );
}
