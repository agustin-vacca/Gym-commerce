import React from "react";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { FoterDiv } from "./Footerstyle";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <FoterDiv>
      <div className="Informacion">
        <h3>Informacion</h3>
        <h6>politicas de Envio</h6>
      </div>
      <div className="Contacto">
        <h3>Contacto</h3>
        <h6>Tangamandapio 500</h6>
        <h6>Jamememes 2000</h6>
      </div>
      <div className="Siguenos">
        <h3>Siguenos</h3>
        <Link className="link" to="https://www.instagram.com/kunaguero/" target="blank">
        <SiInstagram size={25} />
        </Link>
        <br></br>
        <Link className="link" to="https://www.facebook.com/sergioelkunaguero/?locale=es_LA" target="blank">
        <SiFacebook size={25} />
        </Link>

      </div>
      <div className="HorariosDeAtencion">
        <h3>HorariosDeAtencion</h3>
        <h6>Lunes a Viernes: 9:00 a 18:00</h6>
        <h6>Sabados: 9:00 a 18:00</h6>
      </div>
      <div className="MantenteInformado">
        <h3>Mantente Informado</h3>
      </div>
    </FoterDiv>
  );
}