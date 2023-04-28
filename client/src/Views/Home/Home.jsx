import React, { useEffect, useState } from "react";
import Footer from "../../componentes/Footer/Footer";
import ImageSlider from "../../componentes/ImageSlider/ImageSlider";
import NavBar from "../../componentes/NavBar/NavBar";
import { Layout } from "./commonStyles";
import CategoryDisplayer from "../../componentes/HomeComponents/CategoryDisplayer/CategoryDisplayer";
import ReviewDisplayer from "../../componentes/HomeComponents/Reviews/ReviewDisplayer";
import { useDispatch } from "react-redux";
import { getReviews } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
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
