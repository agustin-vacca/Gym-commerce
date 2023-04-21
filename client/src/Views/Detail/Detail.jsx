import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../componentes/Footer/Footer";
import NavBar from "../../componentes/NavBar/NavBar";
import { getProductById, getReviews, getUsers } from "../../redux/actions";
import { Description, Head, Headimg, Review, Title, WalletContainer } from "./DetailStyles";
import { initMercadoPago } from '@mercadopago/sdk-react'
import DetailReviews from "../../componentes/DetailComponents/DetailReviews/DetailReviews";
import { useAuth0 } from "@auth0/auth0-react";
initMercadoPago('TEST-f8550b3b-473d-4311-957c-5b5fd634b8fe');





const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.detail);
  const { user } = useAuth0();
  const productReviews = useSelector((state) => state.reviews);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProductById(id));
    dispatch(getUsers());
    dispatch(getReviews());
  }, [dispatch, id]);

  const ver = async () => {
    console.log(user);
  }

  const buyClick = async () => {
    const json = await axios.get(`http://localhost:3001/mercadopago/payment/${id}`)
    window.location.assign(json.data)
    return json
  }

  return (
    <div>
      <NavBar />
      <Head>
        <Headimg>
          <img src={product.image} alt="img" width="500px" height="500" />
        </Headimg>
        <Title>
          <h1> {product.name} </h1>
          <h3>Precio: {product.price} U$D</h3>
          <h3>Color: {product.color} </h3>
          <h2>Producto Disponible</h2>
            <WalletContainer>
            <button className="botonCompra" onClick={buyClick} >Comprar</button>
            </WalletContainer>
        </Title>
      </Head>
      <Description>
        <h3> Descripcion: <h5 className="prodDescr">{product.description}</h5> </h3>
      </Description>
      <Review>
        <h3>Reviews</h3>
        <button onClick={ver}>log detalles</button>
        <DetailReviews/>
      </Review>
      <Footer />
    </div>
  );
};

export default Detail;