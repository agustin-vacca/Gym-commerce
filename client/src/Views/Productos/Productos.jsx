import React, { useState } from "react";
import Cards from "../../componentes/Cards/Cards";
import OrderAndFilters from "../../componentes/Filters/OrderAndFilters";
import Footer from "../../componentes/Footer/Footer";
import NavBar from "../../componentes/NavBar/NavBar";
import { Layout } from "./ProductosStyle";



const Productos = () => {
    // eslint-disable-next-line
    const [orden, setOrden] = useState("");

    return (
      <Layout>
        <NavBar />
        <div className="content">
          <div className="filtersComp">
            <h3>FILTROS</h3>
            <OrderAndFilters setOrden={setOrden} />
          </div>
          <div className="imgCards">
            <div className="ContainerCards">
              <Cards />
            </div>
          </div>
        </div>
        <Footer />
      </Layout>
    );
  };
  export default Productos;