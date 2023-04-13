import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../redux/actions";
import style from "./Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  const product = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getProductById(1));
  }, [dispatch, id]);

  return (
    <div>
      <div className={style.head}>
        <div className={style.headimg}>
          <img src={product.image} alt="img" />
        </div>
        <div className={style.title}>
          <h1> {product.name} </h1>
          <h3>Precio: {product.price} </h3>
          <button>añadir al carrito </button>
          <button>disponible</button>
          <div>
            <img src="" alt="mercado pago" />
            <img src="" alt="paypal" />
          </div>
        </div>
      </div>
      <div className={style.description}>
        <h3> Descripcion </h3>
      </div>
      <div className={style.review}>
        <h3>Reviews</h3>
      </div>
    </div>
  );
};

export default Detail;
