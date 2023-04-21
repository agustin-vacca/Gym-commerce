import React from "react";
import { CardDiv } from "./ReviewCardStyle";
import { Link } from "react-router-dom";


function ReviewCard({ user, rating, opinion, producto, image, prodId }) {
  return (
    <CardDiv>
      <div className="text"><h4>{user} sobre :</h4></div>
      <div  className="text"><h4>{producto}</h4></div>
      <img className="img" src={image} alt="foto" />
      <div  ><h5>{opinion}</h5></div>
      <div  ><h4>{rating}/5</h4></div>
      <Link to={`/detail/${prodId}`}>Ver Producto</Link>

    </CardDiv>
  );
}
export default ReviewCard;