import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CardDiv } from "./CardStyle";

function Card({ id, name, price, image, isactive }) {
  const [active, setActive] = useState({ isactive });

  const deleteProp = async (id, boolean) => {
    axios
      .put(`http://localhost:3001/admin/product/${id}?isactive=${boolean}`)
      .then((response) => {
        console.log("esta es la respuesta del axios", response.data);
      });
  };

  const handleClick = (id) => {
    if (active) {
      setActive(false);
      deleteProp(id, false);
    } else {
      setActive(true);
      deleteProp(id, true);
    }
  };

  return (
    <CardDiv>
      {active ? (
        <>
          <button onClick={() => handleClick(id)} className="addBtn">
            Eliminar
          </button>
        </>
      ) : (
        <>
          <button className="deleteBtn" onClick={() => handleClick(id)}>
            Restaurar
          </button>
        </>
      )}

      <div className="TextName">{name}</div>
      <div>
        <img className="ProductImage" src={image} alt="imagen" />
      </div>
      <Link to={`/detail/${id}`}>
        <div className="LinkText">VER MAS</div>
      </Link>
      <div className="TextPrice">Precio : {price} $</div>
    </CardDiv>
  );
}
export default Card;
