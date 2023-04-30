import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Cards from "../../componentes/AdminCards/Cards";
import { getAllProductsAdmin } from "../../redux/actions";
import { Layout } from "./ProductosStyle";

const Productos = () => {
  // eslint-disable-next-line
  const [orden, setOrden] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsAdmin());
  }, [dispatch]);

  return (
    <Layout>
      <div className="content">
        <div className="imgCards">
          <div className="ContainerCards">
            <Cards />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Productos;
