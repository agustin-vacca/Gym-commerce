import React from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "../src/Views/Detail/Detail";
import Formulario from "../src/Views/Form/Form";
import Home from "../src/Views/Home/Home";
import "./App.css";
import AdminDetail from "./Views/AdminDetail/AdminDetail";
import AdminReviews from "./Views/AdminViews/AdminReviews";
import AdminUsers from "./Views/AdminViews/AdminUsers";
import Dash from "./Views/DashBoard/DashBoard";
import Landing from "./Views/Landing/Landing";
import Nosotros1 from "./Views/Nosotros/Nosotros1";
import Preguntas from "./Views/PreguntasFrecuentes/Preguntas";
import Productos from "./Views/Productos/Productos";
import Cards from "./componentes/AdminCards/Cards";
import Error from "./componentes/Error/Error";
import RutasAdmin from "./componentes/RutasProtegidas/RutasAdmin";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<RutasAdmin />}>
          <Route path="/Admin/myProducts" element={<Cards />} />
          <Route path="/Admin/form" element={<Formulario />} />
          <Route path="/Admin/usuarios" element={<AdminUsers />} />
          <Route path="/Admin/dashboard" element={<Dash />} />
          <Route path="/Admin/reviews" element={<AdminReviews />} />
          <Route path="/Admin/edit_products/:id" element={<AdminDetail />} />
        </Route>

        <Route element={<RutasUser />}>
          <Route path="/nosotros" element={<Nosotros1 />} />
        </Route>

        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/catalogue" element={<Productos />} />
        <Route path="/preguntasfrecuentes" element={<Preguntas />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Error />} />
        <Route path="/Admin/productos/editar" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
