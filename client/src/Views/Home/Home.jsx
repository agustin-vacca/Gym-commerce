import Cards from "../../componentes/Cards/Cards";
import NavBar from "../../componentes/NavBar/NavBar";
import Footer from "../../componentes/Footer/Footer";

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
