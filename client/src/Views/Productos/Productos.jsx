import React, { useEffect, useState } from "react";
import Cards from "../../componentes/Cards/Cards";
import OrderAndFilters from "../../componentes/Filters/OrderAndFilters";
import Footer from "../../componentes/Footer/Footer";
import NavBar from "../../componentes/NavBar/NavBar";
import { Layout } from "./ProductosStyle";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions";



const Productos = () => {
    // eslint-disable-next-line
    const [orden, setOrden] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch]);

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