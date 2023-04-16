import React from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "../src/Views/Detail/Detail";
import Formulario from "../src/Views/Form/Form";
import Home from "../src/Views/Home/Home";
import "./App.css";
import Landing from "./Views/Landing/Landing";
import Error from "./componentes/Error/Error";
import Nosotros from "./componentes/Nosotros/Nosotros";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Formulario />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
