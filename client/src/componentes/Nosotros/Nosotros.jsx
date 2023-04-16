import React from "react";
import "./Nosotros.css";
import img from "./R.png";

export default function (){
    return(
    <div className="contenedor">
        <div className="nosotros">¿Quienes somos?</div>
        <div className="contenedor1">
            <div className="card">
                <div className="conteiner2">
                    <img src={img} alt ="img"></img>
                </div>
                <div className="card-iconos">
                    <li className="agrandar"><a href=""><span></span></a></li>   
                    <li className="agrandar"><a href=""><span></span></a></li>
                    <li className="agrandar"><a href=""><span></span></a></li>
                </div>
                <div className="info">
                    <div>Brian</div>
                </div>
            </div>
            <div className="card">
                <div className="conteiner2">
                    <img src={img} alt ="img"></img>
                </div>
                <div className="card-iconos">
                    <li className="agrandar"><a href=""><span></span></a></li>   
                    <li className="agrandar"><a href=""><span></span></a></li>
                    <li className="agrandar"><a href=""><span></span></a></li>
                </div>
                <div className="info">
                    <div>Brian</div>
                </div>
            </div>
            <div className="card">
                <div className="conteiner2">
                    <img src={img} alt ="img"></img>
                </div>
                <div className="card-iconos">
                    <li className="agrandar"><a href=""><span></span></a></li>   
                    <li className="agrandar"><a href=""><span></span></a></li>
                    <li className="agrandar"><a href=""><span></span></a></li>
                </div>
                <div className="info">
                    <div>Brian</div>
                </div>
            </div>
            <div className="card">
                <div className="conteiner2">
                    <img src={img} alt ="img"></img>
                </div>
                <div className="card-iconos">
                    <li className="agrandar"><a href=""><span></span></a></li>   
                    <li className="agrandar"><a href=""><span></span></a></li>
                    <li className="agrandar"><a href=""><span></span></a></li>
                </div>
                <div className="info">
                    <div>Brian</div>
                </div>
            </div> 

        </div>
    </div>
        
    )
};