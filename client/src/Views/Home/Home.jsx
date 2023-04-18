import React, { useState } from "react";
import Cards from "../../componentes/Cards/Cards";
import OrderAndFilters from "../../componentes/Filters/OrderAndFilters";
import Footer from "../../componentes/Footer/Footer";
import ImageSlider from "../../componentes/ImageSlider/ImageSlider";
import NavBar from "../../componentes/NavBar/NavBar";
import { Layout } from "./commonStyles";

const Home = () => {
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
  ];
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
          <div className="ContainerStyles">
            <ImageSlider slides={slides} />
          </div>
          <div className="ContainerCards">
            <Cards />
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};
export default Home;
