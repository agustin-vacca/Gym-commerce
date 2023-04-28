import React, { useEffect, useState } from "react";
import Footer from "../../componentes/Footer/Footer";
import ImageSlider from "../../componentes/ImageSlider/ImageSlider";
import NavBar from "../../componentes/NavBar/NavBar";
import { Layout } from "./commonStyles";
import CategoryDisplayer from "../../componentes/HomeComponents/CategoryDisplayer/CategoryDisplayer";
import ReviewDisplayer from "../../componentes/HomeComponents/Reviews/ReviewDisplayer";
import { useDispatch } from "react-redux";
import { getReviews } from "../../redux/actions";
import img1  from "../../componentes/Imagenes/image-1.jpg";
import img2  from "../../componentes/Imagenes/image-2.jpg";
import img3  from "../../componentes/Imagenes/image-3.jpg";
import img4  from "../../componentes/Imagenes/image-4.jpg";
import img5  from "../../componentes/Imagenes/image-5.jpg";



const Home = () => {
  const dispatch = useDispatch();

  const slides = [
    { url: img1, title: "beach" },
    { url: img2, title: "boat" },
    { url: img3, title: "forest" },
    { url: img4, title: "city" },
    { url: img5, title: "italy" },
  ];
  // eslint-disable-next-line
  const [orden, setOrden] = useState("");

  useEffect(() => {
    dispatch ( getReviews());
  }, [dispatch]);

  return (
    <Layout>
      <NavBar />
      <div className="content">
        <div className="ContainerStyles">
          <ImageSlider slides={slides} /></div>
          <h1>Nuestros Productos</h1>
          <CategoryDisplayer/>
          <br></br>
          <hr></hr>
          <h1>Algunas Reviews</h1>
          <ReviewDisplayer/>
      </div>
      <div className="footerDiv">
       <Footer />  
       </div>
    </Layout>
  );
};
export default Home;
