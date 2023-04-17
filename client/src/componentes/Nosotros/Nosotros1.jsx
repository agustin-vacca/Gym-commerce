import React from "react";
import "./Nosotros.css";
import img from "./R.png";
import { Layout } from "../../Views/Home/commonStyles";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Nosotros1(){
    return(
    <Layout>
      <NavBar />
    <div className="contenedor">
        {/* <div className="somos">¿Quienes somos?</div> */}
        <div className="contenedor1">
            <div className="card">
                <div className="conteiner2">
                    <img src={img} alt ="img"></img>
                </div>
                <div className="card-iconos">
                    {/* <li className="agrandar"><a href=""><span>Iconos de redes sociales</span></a></li>   
                    <li className="agrandar"><a href=""><span>Iconos de redes sociales</span></a></li>
                    <li className="agrandar"><a href=""><span>Iconos de redes sociales</span></a></li> */}
                </div>
                <div className="info">
                    <div>Nombre y descripcion.</div>
                </div>
            </div>
            <div className="card">
                <div className="conteiner2">
                    <img src={img} alt ="img"></img>
                </div>
                <div className="card-iconos">
                    {/* <li className="agrandar"><a href=""><span>Iconos de redes sociales</span></a></li>   
                    <li className="agrandar"><a href=""><span>Iconos de redes sociales</span></a></li>
                    <li className="agrandar"><a href=""><span>Iconos de redes sociales</span></a></li> */}
                </div>
                <div className="info">
                    <div>Nombre y descripcion.</div>
                </div>
            </div>
            <div className="card">
                <div className="conteiner2">
                    <img src={img} alt ="img"></img>
                </div>
                <div className="card-iconos">
                    {/* <li className="agrandar"><a href=""><span>Iconos de redes sociales</span></a></li>   
                    <li className="agrandar"><a href=""><span>Iconos de redes sociales</span></a></li>
                    <li className="agrandar"><a href=""><span>Iconos de redes sociales</span></a></li> */}
                </div>
                <div className="info">
                    <div>Nombre y descripcion.</div>
                </div>
            </div>
            <div className="card">
                <div className="conteiner2">
                    <img src={img} alt ="img"></img>
                </div>
                <div className="card-iconos">
                    {/* <li className="agrandar"><a href=""><span>Iconos de redes sociales</span></a></li>   
                    <li className="agrandar"><a href=""><span>Iconos de redes sociales</span></a></li>
                    <li className="agrandar"><a href=""><span>Iconos de redes sociales</span></a></li> */}
                </div>
                <div className="info">
                    <div>Nombre y descripcion</div>
                </div>
            </div> 

        </div>
    </div>
      <Footer />
    </Layout>
    
        
    )
};