import React from "react";
import { Link } from "react-router-dom";
import {
  CardDiv,
  LinkText,
  ProductImage,
  TextName,
  TextPrice,
} from "./CardStyle";

function Card({ id, name, price, image }) {
  return (
    <CardDiv>
      <TextName>{name}</TextName>
      <ProductImage src={image} alt="img-prod" />
      <Link to={`/detail/${id}`}>
        <LinkText>VER MAS</LinkText>
      </Link>
      <TextPrice>Precio : {price} $</TextPrice>
    </CardDiv>
  );
}
export default Card;
