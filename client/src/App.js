import React from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "../src/Views/Detail/Detail";
import Formulario from "../src/Views/Form/Form";
import Home from "../src/Views/Home/Home";
import "./App.css";
import Landing from "./Views/Landing/Landing";
import Error from "./componentes/Error/Error";
import Nosotros1 from "./componentes/Nosotros/Nosotros1";
import Preguntas from "./componentes/PreguntasFrecuentes/Preguntas";
import AdminGral from "./Views/AdminViews/AdminGral";
import AdminProducts from "./Views/AdminViews/AdminProducts";
import AdminUsers from "./Views/AdminViews/AdminUsers";
import NewProduct from "./Views/AdminViews/NewProduct";
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/home" element={<Home />} />
				<Route path="/form" element={<Formulario />} />
				<Route path="/detail/:id" element={<Detail />} />
				<Route path="/nosotros" element={<Nosotros1 />} />
				<Route path="/preguntasfrecuentes" element={<Preguntas />} />
				<Route path="*" element={<Error />} />
				<Route path="/Admin" element={<AdminGral />} />
				<Route path="/Admin/productos" element={<AdminProducts />} />
				<Route path="/Admin/usuarios" element={<AdminUsers />} />
				<Route path="/Admin/productos/nuevo" element={<NewProduct />} />
			</Routes>
		</div>
	);
}

export default App;
