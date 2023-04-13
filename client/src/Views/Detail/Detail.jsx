import { useDispatch, useSelector } from "react-redux";
import "./Detail.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProductById } from "../../redux/actions";

const Detail = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(getProductById(id))
},[dispatch, id])


  const product = useSelector((state) => state.detail);
  
  return (
    <div>
      <div className="head">
        <div className="headimg">
          <img src={product.image} alt="img" width="500px" height="500"/>
        </div>
        <div className="title">
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
      <div className="description">
        <h3> Descripcion </h3>
      </div>
      <div className="review">
        <h3>Reviews</h3>
      </div>
    </div>
  );
};

export default Detail;
