import { Link } from "react-router-dom";
import { CardsDiv, TextPrice } from "./CardsStyle";

function Card({ id, name, price, image }) {
  return (
    <CardsDiv>
        <p>{name}</p>
        <img src={image} alt="img-prod" width="200px" />
        <Link to={`/detail/${id}`}>
          <p>VER MAS</p>
        </Link>
        <TextPrice>Precio : {price} U$D</TextPrice>
    </CardsDiv>
  );
}
export default Card;
