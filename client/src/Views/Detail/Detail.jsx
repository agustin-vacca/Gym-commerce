import { initMercadoPago } from "@mercadopago/sdk-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import DetailReviews from "../../componentes/DetailComponents/DetailReviews/DetailReviews";
import Footer from "../../componentes/Footer/Footer";
import NavBar from "../../componentes/NavBar/NavBar";
import {
  ApiUrl,
  deleteItemCarrito,
  getProductById,
  getReviews,
  getUsers,
  putProduct,
} from "../../redux/actions";
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
  // eslint-disable-next-line
  const [carritos, setCarritos] = useState(carrito);
  const navigate = useNavigate();

  const promedioHandler = () => {
    let promedio = 0;
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

  const seguirComprando = () => {
    navigate("/catalogue");
  };

  const buyClick = async (prodStock) => {
    dispatch(putProduct(id, prodStock -1));
    const json = await axios.get(
      `${ApiUrl}/mercadopago/payment/${id}`
    );
    window.location.assign(json.data);
    return json;
  };

  const handleClickCarrito = (id) => {
    const found = carrito.find((elem) => elem.id === id);
    if (found) {
    } else {
      product.cantidad = 1;
      carrito.push(product);
      window.localStorage.setItem("carrito", JSON.stringify(carrito));
      setOrden(orden + 1);
    }
  };

  const handleRemoveItem = (id) => {
    const filtro = carrito.filter((elem) => elem.id !== id);
    setCarritos(filtro);
    setOrden(orden + 1);
    dispatch(deleteItemCarrito(filtro));

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
          <h3>Precio: $ {product.price} Arg</h3>
          { product.color == null ?
            <h3>Color: Negro </h3>
           :
           <h3>Color: {product.color} </h3>
          }
          <h3> Stock: Disponible </h3>
          <p> ({product.stock} unidades disponibles) </p>
          <h3>
            Promedio:{" "}
            {`${
              !promedio
                ? "Se el primero en valorar este producto"
                : (promedio / product.reviews?.length).toFixed(2)
            }`}{" "}
          </h3>

          { // TERNARIO DE STOCK
            product.stock === 0 
            ?<button
            className="compradoBtn"
          >
           NO HAY STOCK
          </button>
            : <WalletContainer>
            { // TERNARIO SI TIENE EL PROD EN EL CARRITO
            !carrito.length ? (
              <button className="botonCompra" onClick={()=>buyClick(product.stock)}>
                Comprar
              </button>
            ) : (
              <button className="seguirComprando" onClick={seguirComprando}>
                Seguir comprando
              </button>
            )}
              
            { // TERNARIO PARA AGREGAR AL CARRITO
            carrito.find((elem) => elem.id === Number(id)) ? (
              <button
                className="compradoBtn"
                onClick={() => handleRemoveItem(product.id)}
              >
                EN CARRITO
              </button>
            ) : (
              <button
                className="botonCarrito"
                onClick={() => handleClickCarrito(product.id)}
              >
                Agregar al Carrito
              </button>
            )}
          </WalletContainer>

          }
          
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
