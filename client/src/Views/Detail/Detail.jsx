import React, { useEffect } from "react";
import { BsPaypal } from "react-icons/bs";
import { SiMercadopago } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../../componentes/Footer/Footer";
import NavBar from "../../componentes/NavBar/NavBar";
import { getProductById } from "../../redux/actions";
import { Description, Head, Headimg, Review, Title } from "./DetailStyles";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  const product = useSelector((state) => state.detail);

  return (
    <div>
      <NavBar />
      <Head>
        <Headimg>
          <img src={product.image} alt="img" width="500px" height="500" />
        </Headimg>
        <Title>
          <h1> {product.name} </h1>
          <h3>Precio: {product.price} </h3>
          <button>Añadir al carrito </button>
          <button>Producto Disponible</button>
          <div>
            <SiMercadopago size={30} />
            <BsPaypal size={30} />
          </div>
        </Title>
      </Head>
      <Description>
        <h3> Descripcion: {product.description} </h3>
      </Description>
      <Review>
        <h3>Reviews</h3>
      </Review>
      <Footer />
    </div>
  );
};

export default Detail;
