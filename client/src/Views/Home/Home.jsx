import React from "react";
import Cards from "../../componentes/Cards/Cards";
import Footer from "../../componentes/Footer/Footer";
import NavBar from "../../componentes/NavBar/NavBar";



import ImageSlider from "../../componentes/ImageSlider/ImageSlider"
import { Layout, ContainerStyles } from "./commonStyles";

const Home = () => {

  const slides=[
    { url: "http://localhost:3000/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
  ]

  return (
    <Layout>
      <NavBar />
      <ContainerStyles>
          <ImageSlider slides={slides}/>
      </ContainerStyles>
      <Cards />
      <Footer />

    </Layout>
  );
};
export default Home;
