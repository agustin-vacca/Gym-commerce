import React from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "../src/Views/Detail/Detail";
import Formulario from "../src/Views/Form/Form";
import Home from "../src/Views/Home/Home";
import "./App.css";
import AdminGral from "./Views/AdminViews/AdminGral";
import AdminProducts from "./Views/AdminViews/AdminProducts";
import AdminReviews from "./Views/AdminViews/AdminReviews";
import AdminUsers from "./Views/AdminViews/AdminUsers";
import EditProduct from "./Views/AdminViews/EditProduct";
import Dash from "./Views/DashBoard/DashBoard";
import Landing from "./Views/Landing/Landing";
import Nosotros1 from "./Views/Nosotros/Nosotros1";
import Preguntas from "./Views/PreguntasFrecuentes/Preguntas";
import Productos from "./Views/Productos/Productos";
import Error from "./componentes/Error/Error";
import RutasAdmin from "./componentes/RutasProtegidas/RutasAdmin";
import RutasUser from "./componentes/RutasProtegidas/RutasProtegidas";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<RutasAdmin />}>
          <Route path="/form" element={<Formulario />} />
        </Route>

        <Route element={<RutasUser />}>
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/nosotros" element={<Nosotros1 />} />
        </Route>

        <Route path="/catalogue" element={<Productos />} />
        <Route path="/preguntasfrecuentes" element={<Preguntas />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Error />} />
        <Route path="/Admin" element={<AdminGral />} />
        <Route path="/Admin/productos" element={<AdminProducts />} />
        <Route path="/Admin/usuarios" element={<AdminUsers />} />
        <Route path="/Admin/reviews" element={<AdminReviews />} />
        <Route path="/Admin/productos/nuevo" element={<Formulario />} />
        <Route path="/Admin/productos/editar" element={<EditProduct />} />
        <Route path="/Admin/dashboard" element={<Dash />} />
      </Routes>
    </div>
  );
}

export default App;
