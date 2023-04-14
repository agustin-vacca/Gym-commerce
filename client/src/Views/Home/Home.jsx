import React from "react";
import Cards from "../../componentes/Cards/Cards";
import Footer from "../../componentes/Footer/Footer";
import NavBar from "../../componentes/NavBar/NavBar";

import { Layout } from "./commonStyles";

const Home = () => {
  return (
    <Layout>
      <NavBar />
      <Cards />
      <Footer />
    </Layout>
  );
};
export default Home;
