import React from "react";
import { FoterDiv } from "../../Layouts/Footerstyle";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <FoterDiv>
      <div className={style.Informacion}>
        <h3>Informacion</h3>
        <h6>politicas de Envio</h6>
      </div>
      <div className={style.Contacto}>
        <h3>Contacto</h3>
        <h6>Tangamandapio 500</h6>
        <h6>Jamememes 2000</h6>
      </div>
      <div className={style.Siguenos}>
        <h3>Siguenos</h3>
        <h6>Instagram</h6>
        <h6>Facebook</h6>
      </div>
      <div className={style.HorariosDeAtencion}>
        <h3>HorariosDeAtencion</h3>
        <h6>Lunes a Viernes: 9:00 a 18:00</h6>
        <h6>Sabados: 9:00 a 18:00</h6>
      </div>
      <div className={style.MantenteInformado}>
        <h3>Mantente Informado</h3>
      </div>
    </FoterDiv>
  );
}
