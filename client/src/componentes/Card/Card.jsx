import { Link } from "react-router-dom";
import style from "../Card/Card.module.css";

function Card({ id, name, email }) {
  return (
    <div>
      <div className={style.card}>
        <Link to={`/detail/${id}`}>
          <p>email : {email}</p>
        </Link>
        <p>name : {name}</p>
        <p>id : {id}</p>
      </div>
    </div>
  );
}
export default Card;
