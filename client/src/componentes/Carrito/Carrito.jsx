import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import {
  CarritoHeader,
  CarritoItem,
  CarritoItemDetalle,
  CarritoItems,
  MyCarrito,
} from "./CarritoStyle";

const Carrito = ({ popupActive, setPopupActive }) => {
  const [] = useState(false);

  return (
    <MyCarrito>
      <span onClick={() => setPopupActive(!popupActive)}>
        <BiX className="btn-close" size={25} />
      </span>
      <CarritoHeader>
        <h2>Tu carrito popup</h2>
      </CarritoHeader>
      <CarritoItems>
        <CarritoItem>
          <img src="" width="80px" />
          <CarritoItemDetalle></CarritoItemDetalle>
        </CarritoItem>
      </CarritoItems>
    </MyCarrito>
  );
};

export default Carrito;
