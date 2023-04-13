import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Detail from "./componentes/Detail/Detail";
import Error from "./componentes/Error/Error";
import Formulario from "./componentes/Form/Form";
import Home from "./componentes/Home/Home";
import Landing from "./componentes/Landing/Landing";
//import NavBar from "./componentes/NavBar/NavBar";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {/* este linea es para fijar la navBar e todos las paginas menos en Landing */}
      {/* {location.pathname !== "/" ? <NavBar /> : null} */}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Formulario />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
