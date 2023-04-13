import { Link } from "react-router-dom";
import { CardsDiv } from "./CardsStyle";

function Card({ id, name, price, image }) {

  return (
    <CardsDiv>
      <div>
        <p>{name}</p>
        <img src={image} alt="img-prod"  width="200px"/>
        <Link to={`/detail/${id}`}>
          <p>VER MAS</p>
        </Link>
        <p>Precio : {price} U$D</p>
      </div>
    </CardsDiv>
  );
}
export default Card;
