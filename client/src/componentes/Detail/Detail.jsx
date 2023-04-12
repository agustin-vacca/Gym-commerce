import React from "react";
import style from "./Detail.module.css";

const Detail = () => {
  return (
    <div>
      <div className={style.head}>
        <div className={style.headimg}>
          <img src="" alt="img" />
        </div>
        <div className={style.title}>
          <h1>Nombre del producto </h1>
          <h3>precio</h3>
          <button>añadir al carrito </button>
          <button>disponible</button>
          <div>
            <img src="" alt="mercado pago" />
            <img src="" alt="paypal" />
          </div>
        </div>
      </div>
      <div className={style.description}>
        <h3>descripcion</h3>
      </div>
      <div className={style.review}>
        <h3>Reviews</h3>
      </div>
    </div>
  );
};

export default Detail;
