import React from "react";
import { CardDiv } from "./CategoryCardStyle";
import { useDispatch } from "react-redux";
import { filterProductsByCategories } from "../../../redux/actions";
import { useNavigate } from "react-router-dom";

function CategoryCard({ name, image }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFilterCategories = (event) => {
    console.log(event.target.value);
    dispatch(filterProductsByCategories(event.target.value));
     navigate("/catalogue")  
  };
  return (
    <CardDiv  >
      <div className="text"><h1>{name}</h1></div>
      <img className="img" src={image} alt="foto" />
      <button className="btn" onClick={(event) => handleFilterCategories(event)} value={name}>Ver Mas</button>
    </CardDiv>
  );
}
export default CategoryCard;