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

  const handleSubmit = () => {
    dispatch(getProductsbyName(name));
    setName(" ");
  };

  /*
   * Verifica que exista el objeto landingName en el local storage, que viene del landing page y luego lo borra
   */
  const HandleLandname = () => {
    dispatch(getProductsbyName(landName));
    //window.localStorage.removeItem("landingName");
  };
  const landName = JSON.parse(localStorage.getItem("landingName"));
  if (landName) HandleLandname();

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
