import Cards from "../../componentes/Cards/Cards";
import NavBar from "../../componentes/NavBar/NavBar";
import Footer from "../../componentes/Footer/Footer";
import { Layout } from "../../componentes/common/styled_components/commonStyles";
import style from "./Home.module.css";
import logo from "../../images/Logo.png"


const Home = () => {

  return (
    <Layout >
      <div className={style.allNavBars}>
        <div className={style.NavBarDiv}>
          <img src={logo} alt="." width="70px"/>
          <NavBar />
          <h3 className={style.ThisIsLog}>INGRESAR/REGISTRARSE</h3>
        </div>
        <div className={style.divTwo}>
          <div className={style.navButton}>Inicio</div>
          <div className={style.navButton}>Productos</div>
          <div className={style.navButton}>Preguntas Frecuentes</div>
          <div className={style.navButton}>Nosotros</div>
        </div>

<Cards></Cards>

      </div>

      <div className={style.FooterDiv}>
        <Footer />
      </div>
    </Layout>
  );
};
export default Home;
