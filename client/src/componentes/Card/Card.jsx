import React from "react";
import { Link } from "react-router-dom";
import { CardsDiv, LinkText, ProductImage, TextName, TextPrice } from "./CardsStyle";

function Card({ id, name, price, image }) {
  return (
    <CardsDiv>
        <TextName>{name}</TextName>
        <ProductImage src={image} alt="img-prod" width="200px" />
        <Link to={`/detail/${id}`}>
          <LinkText>VER MAS</LinkText>
        </Link>
        <TextPrice>Precio : {price} U$D</TextPrice>
    </CardsDiv>
  );
}
export default Card;
