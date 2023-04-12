import { Link } from "react-router-dom";
import style from "../Card/Card.module.css";

function Card({ id, name, price }) {
  return (
    <div>
      <div className={style.card}>
        <p>id : {id}</p>
        <p>price : {price}</p>
        <p>name : {name}</p>
        <Link to={`/detail/${id}`}>
          <p>VER MAS</p>
        </Link>
      </div>
    </div>
  );
}
export default Card;
