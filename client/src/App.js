import React from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "../src/Views/Detail/Detail";
import Formulario from "../src/Views/Form/Form";
import Home from "../src/Views/Home/Home";
import "./App.css";
import Landing from "./Views/Landing/Landing";
import Nosotros1 from "./Views/Nosotros/Nosotros1";
import Preguntas from "./Views/PreguntasFrecuentes/Preguntas";
import Productos from "./Views/Productos/Productos";
import AdminGral from "./Views/AdminViews/AdminGral";
import AdminProducts from "./Views/AdminViews/AdminProducts";
import AdminUsers from "./Views/AdminViews/AdminUsers";
import EditProduct from "./Views/AdminViews/EditProduct";
import AdminReviews from "./Views/AdminViews/AdminReviews";
import Error from "./componentes/Error/Error";


function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/home" element={<Home />} />
				<Route path="/catalogue" element={<Productos />} />
				<Route path="/detail/:id" element={<Detail />} />
				<Route path="/nosotros" element={<Nosotros1 />} />
				<Route path="/preguntasfrecuentes" element={<Preguntas />} />
				<Route path="*" element={<Error />} />
				<Route path="/Admin" element={<AdminGral />} />
				<Route path="/Admin/productos" element={<AdminProducts />} />
				<Route path="/Admin/usuarios" element={<AdminUsers />} />
				<Route path="/Admin/reviews" element={<AdminReviews />} />
				<Route path="/Admin/productos/nuevo" element={<Formulario />} />
				<Route path="/Admin/productos/editar" element={<EditProduct />} />
			</Routes>
		</div>
	);
}

export default App;
