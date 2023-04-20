import React from "react";
import { CardDiv } from "./CategoryCardStyle";

function CategoryCard({ name, image  }) {
  return (
    <CardDiv>
      <div className="text"><h1>{name}</h1></div>
        <img className="img" src={image} alt="foto"></img>
       <a href="/catalogue" className="btn">Ver Mas</a>
    </CardDiv>
  );
}
export default CategoryCard;