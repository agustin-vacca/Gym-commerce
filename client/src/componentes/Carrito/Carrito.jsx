import React, { useState } from "react";
import { BiMinus, BiPlus, BiTrashAlt, BiX } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { MyCarrito } from "./CarritoStyle";
import { getProductById } from "../../redux/actions";

const Carrito = ({ popupActive, setPopupActive }) => {
  const dispatch = useDispatch();
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

  
  const hanleSum = (num) => {
    const found = carritos.find(elem => elem.id == num)
    found.cantidad++
    setQuantity(Quantity + 1 )
    console.log(found.cantidad);
  };

  const hanleRest = (num) => {
    console.log(num);
    const found = carritos.find(elem => elem.id == num)
    if(found.cantidad > 1){
      found.cantidad--
      setQuantity(Quantity - 1 )
     console.log(found.cantidad);
    } 
  return found
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
        carritos.map(({ id, name, image, price, cantidad }) => (
          <div key={id} className="CarritoItem">
            <img src={image} alt={name} className="ItemImg" />
            <div className="CarritoDetail">
              <span className="ItemName">{name}</span>

              <div className="valorCantidad">
              <button value={id} onClick={ (event) => hanleSum(event.target.value)}> + </button>
                <input type="text" value={cantidad} className="Itemquantity" />
                <button value={id} onClick={ (event) => hanleRest(event.target.value)}> - </button>
              </div>
              <span className="ItemPrecio"> $ {price * cantidad} ARS</span>
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
