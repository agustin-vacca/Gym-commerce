import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../../componentes/Footer/Footer";
import NavBar from "../../componentes/NavBar/NavBar";
import { getProductById } from "../../redux/actions";
import { BotonCompra, Description, Head, Headimg, Review, Title, WalletContainer } from "./DetailStyles";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
initMercadoPago('TEST-f8550b3b-473d-4311-957c-5b5fd634b8fe');





const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getProductById(id));
    console.log(id);
  }, [dispatch, id]);


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