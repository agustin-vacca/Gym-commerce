import React, { useState } from "react";
import { BiTrashAlt, BiX } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { BotonMas, BotonMenos, MyCarrito } from "./CarritoStyle";
import axios from "axios";
import { deleteItemCarrito } from "../../redux/actions";

const Carrito = ({ popupActive, setPopupActive }) => {
  const dispatch = useDispatch();

  const [Quantity, setQuantity] = useState(1);
  const carrito = useSelector((state) => state.carrito);
  const [carritos, setCarritos] = useState(carrito);
  const [sumaTotal, setSumaTota] = useState(0);

  //Formula para sacar el Pago Total
  let PagoTotalArreglado = sumaTotal
  let PagoTotal = 0;
  carritos.forEach((numero) => {
    PagoTotal += numero.price;
  });
  //Funcion para eliminar un item del carrito
  const handlerDelete = (id) => {
   const filtro = (carritos.filter((carro) => carro.id !== id));
   setCarritos(filtro)
   dispatch(deleteItemCarrito(filtro));
  };
  
  const hanleSum = (num) => {
    const found = carritos.find(elem => elem.id === Number(num))
    found.cantidad++
    setQuantity(Quantity + 1 )
    SumaTotal()
  };

  const hanleRest = (num) => {
    const found = carritos.find(elem => elem.id === Number(num))
    if(found.cantidad > 1){
      found.cantidad--
      setQuantity(Quantity - 1 )
      SumaTotal()
    } 
  return found
  };

  const SumaTotal = () => {
    let TotalValorItems = 0
    carritos.forEach(elem =>{
    let totalItem =  elem.price * elem.cantidad
    TotalValorItems=TotalValorItems+totalItem
    })
    setSumaTota(TotalValorItems)
  };




  const hanleSell = async() => {
  const items = carritos.map((elem) => ({
    key:elem.id,
    id:elem.id,
    name: elem.name,
    cantidad:elem.cantidad,
    unit_price:elem.price,
    image:elem.image,
    description: elem.description,
  }))
  const headers = { "Content-Type": "text/plain" };

  
  const json = await axios.post(`https://api-mx1xp8s8p-santiaguero91.vercel.app/mercadopago/create_preference`,items, headers)
  window.location.assign(json.data) 
  return json; 
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
        carritos.map(({ id, name, image, price, cantidad}) => (
          <div key={id} className="CarritoItem">
            <img src={image} alt={name} className="ItemImg" />
            <div className="CarritoDetail">
              <span className="ItemName">{name}</span>

              <div className="valorCantidad">
                <BotonMenos value={id} onClick={ (event) => hanleRest(event.target.value)}>-</BotonMenos>
                <div className="Itemquantity">{cantidad}</div>
              <BotonMas value={id} onClick={ (event) => hanleSum(event.target.value)}>+</BotonMas>
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
          { 
            !sumaTotal  
            ? <span className="precioTotal">$ {PagoTotal * Quantity} ARS</span> 
            : <span className="precioTotal">$ {PagoTotalArreglado} ARS</span>
          }
          <button className="btnPagar" onClick={hanleSell} >Pagar</button>
        </div>
      </div>
    </MyCarrito>
  );
};

export default Carrito;
