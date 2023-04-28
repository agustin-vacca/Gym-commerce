import React from "react";
/* import accesorios from "../../accesorios.jpg";
import box from "../../box.jpg";
import cardiganRectangulo from "../../cardiganRectangulo.png";
import casaGimnasio from "../../casaGimnasio.png";
import discosRogue from "../../discosRogue.jpg";
import gymMaquinas from "../../gymMaquinas.jpg"; */
import { LandingDiv } from "./LandingStyle.js";

function Landing() {
  //const navigate = useNavigate();
/*   const myFunction = (e) => {
    const name = e.target.className;
    //if (name === "pelota")
    alert(`Click en la imagen ${name}`);
    //navigate("/productos/${id}`");
  }; */
  return (
    <LandingDiv>
{/*       <div className="logo">
        <img
          className="logoImg"
          src={cardiganRectangulo}
          alt="cardiganRectangulo"
        />
        <h1 className="h1">Bienvenido!</h1>
      </div>
      <div className="slider">
        <img src={discosRogue} alt="discosRogue" useMap="#discosRogue" />
        <img src={gymMaquinas} alt="gymMaquinas" useMap="#gymMaquinas" />
        <img src={casaGimnasio} alt="casaGimnasio.png" useMap="#casaGimnasio" />
        <img src={accesorios} alt="accesorios" useMap="#guantes" />
        <img src={box} alt="box" />
        <div className="divs">
          <h1 className="h1CARDIGAN">CARDIGAN</h1>
          Ingresar a la tienda
          <button className="button">GO!</button>
        </div>
        <map name="casaGimnasio" className="workmap">
          <area
            className="pelota"
            shape="circle"
            coords="282,478,160"
            onClick={(e) => myFunction(e)}
          />
          <area
            className="banca"
            shape="rectangle"
            coords="991, 310, 1253, 546 "
            onClick={(e) => myFunction(e)}
          />
          <area
            className="barra"
            shape="rectangle"
            coords="922, 40, 1338, 119"
            onClick={(e) => myFunction(e)}
          />
          <area
            className="mancuernas"
            shape="circle"
            coords="718,482,75"
            onClick={(e) => myFunction(e)}
          />
        </map>
        <map name="discosRogue" className="discosRogue">
          <area
            className="discos"
            shape="circle"
            coords="195,385,220"
            onClick={(e) => myFunction(e)}
          />
          <area
            className="discos"
            shape="circle"
            coords="1095,15,220"
            onClick={(e) => myFunction(e)}
          />
          <area
            className="discos"
            shape="circle"
            coords="692,188,220"
            onClick={(e) => myFunction(e)}
          />
        </map>
        <map name="gymMaquinas" className="gymMaquinas">
          <area
            className="maquinas"
            shape="rectangle"
            coords="20,133,658,603"
            onClick={(e) => myFunction(e)}
          />
          <area
            className="banca"
            shape="rectangle"
            coords="1092,151,1292,393"
            onClick={(e) => myFunction(e)}
          />
        </map>
        <map name="guantes" className="guantes">
          <area
            className="accesorios"
            shape="rectangle"
            coords="380,0,965,115"
            onClick={(e) => myFunction(e)}
          />
          <area
            className="mancuernas"
            shape="rectangle"
            coords="270,426,1074,604"
            onClick={(e) => myFunction(e)}
          />
        </map>
      </div> */}
    </LandingDiv>
  );
}
export default Landing;

/* 
<div className="card">
        <div className="face front">
          <img className="map_img" src={imagen} alt="Logo Cardigan" />
        </div>
        
        <div className="face back">
          <div className="letters">
            <h3 className="entrar" onClick={myFunction}>
              ENTRAR
            </h3>
          </div>
        </div>
</div>

-------------------------------------------
    
    <LandingDiv>
      <div className="background">
        <img
          className="map_img"
          src={imagen}
          alt="Logo Cardigan"
          useMap="#workmap"
        />
        <map name="workmap" className="workmap">
          <area
            shape="circle"
            coords="170,150,160"
            alt="logo"
            onClick={myFunction}
          ></area>
        </map>
      </div>
    </LandingDiv>
    */
