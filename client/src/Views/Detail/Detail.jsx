import { initMercadoPago } from "@mercadopago/sdk-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailReviews from "../../componentes/DetailComponents/DetailReviews/DetailReviews";
import Footer from "../../componentes/Footer/Footer";
import NavBar from "../../componentes/NavBar/NavBar";
import { deleteItemCarrito, getProductById, getReviews, getUsers } from "../../redux/actions";
import {
  Description,
  Head,
  Headimg,
  Review,
  Title,
  WalletContainer,
} from "./DetailStyles";
initMercadoPago("TEST-f8550b3b-473d-4311-957c-5b5fd634b8fe");

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.detail);


  const carrito = useSelector((state) => state.carrito);
  // eslint-disable-next-line
  const [orden, setOrden] = useState(0);
  const [promedio, setPromedio] = useState(null);


  const [carritos, setCarritos] = useState(carrito);

  const promedioHandler = () => {
    let promedio = "";
    const cantLargo = product.reviews?.length;
    for (let i = 0; i < cantLargo; i++) {
      promedio = Number(promedio) + Number(product.reviews[i].rating);
    }
    return promedio;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProductById(id));
    dispatch(getUsers());
    dispatch(getReviews());
  }, [dispatch, id]);

  useEffect(() => {
    const result = promedioHandler();
    setPromedio(result);
    // eslint-disable-next-line
  }, [product]);

  const buyClick = async () => {
    const json = await axios.get(
      `http://localhost:3001/mercadopago/payment/${id}`
    );
    window.location.assign(json.data);
    return json;
  };

  const handleClickCarrito = (id) => {
    const found = carrito.find((elem) => elem.id === id);
    if (found) {
      console.log("Ya esta el producto");
    } else {
      product.cantidad = 1;
      carrito.push(product);
      window.localStorage.setItem("carrito", JSON.stringify(carrito));
      console.log("producto agregado");
      setOrden(orden+1)
    }
  };

  const handleRemoveItem = (id) => {
    const filtro = carrito.filter((elem) => elem.id !== id);
    setCarritos(filtro)
    setOrden(orden+1)
    dispatch(deleteItemCarrito(filtro));
    console.log(carritos, "carritos");
    console.log(filtro, "filtro");
  };

  return (
    <div>
      <NavBar />
      <Head>
        <Headimg>
          <img src={product.image} alt="img" width="500px" height="500" />
        </Headimg>
        <Title>
          <h1> {product.name} </h1>
          <h3>Precio: {product.price} $ Arg</h3>
          <h3>Color: {product.color} </h3>
          {/*  {`${numberCheck=== String(2) ? "special" : ""}`} */}
          <h3>
            Promedio:{" "}
            {`${
              !promedio
                ? "Se el primero en valorar este producto"
                : promedio / product.reviews?.length + "/5"
            }`}{" "}
          </h3>
          {/*           <h3>Promedio: {promedio / product.reviews?.length} </h3>       */}
          <h2>Producto Disponible</h2>
          <WalletContainer>
            <button className="botonCompra" onClick={buyClick}>
              Comprar
            </button>

            {
              carrito.find((elem) => elem.id === Number (id)) ? 
              <button className="compradoBtn" onClick={() =>handleRemoveItem(product.id)}>
              EN CARRITO
            </button> : 
            <button
              className="botonCarrito"
              onClick={() => handleClickCarrito(product.id)}
            >Agregar al Carrito</button>
            }
          
          </WalletContainer>
        </Title>
      </Head>

      <Description>
        <h5>
          Descripcion: <p className="prodDescr">{product.description}</p>
        </h5>
      </Description>
      <Review>
        <DetailReviews />
      </Review>
      <Footer />
    </div>
  );
};

export default Detail;
