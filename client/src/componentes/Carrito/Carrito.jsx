import React from "react";
import { BiMinus, BiPlus, BiTrashAlt, BiX } from "react-icons/bi";
import { MyCarrito } from "./CarritoStyle";

const Carrito = ({ popupActive, setPopupActive }) => {
  let { name, price, weight, image, color } = JSON.parse(
    localStorage.getItem("carrito")
  );

  return (
    <MyCarrito>
      <div className="CarritoHeader">
        <div className="btn-close" onClick={() => setPopupActive(!popupActive)}>
          <BiX size={25} />
        </div>
        <h2>Tu carrito</h2>
      </div>

      <div className="CarritoItem">
        <img src={image} alt={name} className="ItemImg" />
        <div className="CarritoDetail">
          <span className="ItemName">{name}</span>
          <div className="valorCantidad">
            <BiMinus className="btnAddLess" />
            <input type="text" value="1" className="Itemquantity" disabled />
            <BiPlus className="btnAddLess" />
          </div>
          <span className="ItemPrecio"> $ {price} ARS</span>
        </div>
        <BiTrashAlt className="btnEliminar" />
      </div>
      <div className="carritoTotal">
        <div className="fila">
          <strong>Total</strong>
          <span className="precioTotal">precio total</span>
        </div>
      </div>
    </MyCarrito>
  );
};

export default Carrito;
