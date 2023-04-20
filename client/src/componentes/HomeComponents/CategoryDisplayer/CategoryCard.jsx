import React from "react";
import { CardDiv } from "./CategoryCardStyle";
import { Link } from "react-router-dom";

function CategoryCard({ name, image  }) {
  return (
    <CardDiv>
      <div className="text"><p>{name}</p></div>
      <Link className="img" to={`/catalogue`}>
      <p>{image}</p>
       <div><h6>Aca va la imagen</h6></div>
       </Link>
    </CardDiv>
  );
}
export default CategoryCard;