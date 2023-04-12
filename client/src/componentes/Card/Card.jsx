import React from "react";
import { Link } from "react-router-dom";
import style from "../Card/Card.module.css";
import { Cards } from "../common/styled_components/commonStyles";




function Card({ id, name, price, image }) {
  return (
    <Cards>
      <div className={style.card}>
        <p>{name}</p>
        <img src={image} alt="img-prod"  width="200px"/>
        <Link to={`/detail/${id}`}>
          <p>VER MAS</p>
        </Link>
        <p>Price : {price} U$D</p>
      </div>
    </Cards>
  );
}
export default Card;
