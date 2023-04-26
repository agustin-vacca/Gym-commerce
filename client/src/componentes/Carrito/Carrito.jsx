import React, { useState } from "react";
import { BiMinus, BiPlus, BiTrashAlt, BiX } from "react-icons/bi";
import { useSelector } from "react-redux";
import { MyCarrito } from "./CarritoStyle";

const Carrito = ({ popupActive, setPopupActive }) => {
  const [Quantity, setQuantity] = useState(1);

  const carrito = useSelector((state) => state.carrito);
  const [carritos, setCarritos] = useState(carrito);

  //Formula para sacar el Pago Total
  let PagoTotal = 0;
  carritos.forEach((numero) => {
    PagoTotal += numero.price;
  });
  //Funcion para eliminar un item del carrito
  const handlerDelete = (id) => {
    setCarritos(carritos.filter((carro) => carro.id !== id));
  };

  return (
    <MyCarrito>
      <div className="CarritoHeader">
        <div className="btn-close" onClick={() => setPopupActive(!popupActive)}>
          <BiX size={25} />
        </div>
        <h2 className="Header">Tu carrito</h2>
      </div>
      {carritos &&
        carritos.map(({ id, name, image, price }) => (
          <div key={id} className="CarritoItem">
            <img src={image} alt={name} className="ItemImg" />
            <div className="CarritoDetail">
              <span className="ItemName">{name}</span>
              <div className="valorCantidad">
                <BiMinus
                  className="btnAddLess"
                  onClick={() =>
                    setQuantity(Quantity - 1 <= 1 ? 1 : Quantity - 1)
                  }
                />
                <input type="text" value={Quantity} className="Itemquantity" />
                <BiPlus
                  className="btnAddLess"
                  onClick={() => setQuantity(Quantity + 1)}
                />
              </div>
              <span className="ItemPrecio"> $ {price * Quantity} ARS</span>
            </div>
            <BiTrashAlt
              className="btnEliminar"
              onClick={() => handlerDelete(id)}
            />
          </div>
        ))}
      <div className="carritoTotal">
        <div className="fila">
          <strong>Total</strong>
          <span className="precioTotal">$ {PagoTotal * Quantity} ARS</span>
          <button className="btnPagar">Pagar</button>
        </div>
      </div>
    </MyCarrito>
  );
};

export default Carrito;
