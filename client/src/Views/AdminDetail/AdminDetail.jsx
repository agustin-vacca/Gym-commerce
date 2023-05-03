import React, { useEffect, useState } from "react";
import { AiFillHome, AiOutlineComment, AiOutlineForm } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import logoImage from "../../cardiganRectangulo.png";
import { getProductById, putProduct } from "../../redux/actions";
import { Sidebar } from "../DashBoard/DashBoardStyles";
import { Head, Headimg, Title } from "./AdminDetailStyles";

const AdminDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [texto, setTexto] = useState("");
  const [editando, setEditando] = useState(false);
  const [sendForm, setSendForm] = useState(false);
  const product = useSelector((state) => state.detail);
  // Cambi el estado del input y lo hace modificable
  const editarTexto = () => {
    setEditando(true);
  };

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  //guarda los datos cambiados en el state texto
  const handleChange = (event) => {
    setTexto({
      [event.target.name]: event.target.value,
    });
  };

  const handlerSubmit = () => {
    dispatch(putProduct(id, texto));
    setSendForm(true);
    setTimeout(() => setSendForm(false), 5000);
  };

  return (
    <Sidebar>
      <div className="Logo">
        <img src={logoImage} alt="logoImg" />
      </div>
      <div className="Contenido">
        <div className="DivLabelEmergente">
          {linksArray &&
            linksArray.map(({ label, icon, to }) => (
              <Link className="linklabel" to={to} key={label}>
                <div
                  className={
                    label === "Productos" ? "labelComponente" : "label"
                  }
                >
                  <div>{label}</div>
                  <div>{icon}</div>
                </div>
              </Link>
            ))}
        </div>
        <div className="contenidoDash">
          <Head>
            <Headimg>
              <h2>Imagen</h2>
              <img src={product.image} alt="img" width="400px" height="400" />
            </Headimg>
            <Title>
              <div className="contenido">
                <div className="inputProp">
                  <h4 className="Props">Nombre:</h4>
                  {editando ? (
                    <input
                      className="valorInput"
                      type="text"
                      name="name"
                      onChange={(event) => handleChange(event)}
                      value={texto.name}
                    />
                  ) : (
                    <input
                      type="text"
                      className="valorInput"
                      value={product.name}
                      readOnly
                    />
                  )}
                </div>
                <div className="inputProp">
                  <h4 className="Props">Precio:</h4>
                  {editando ? (
                    <input
                      className="valorInput"
                      name="price"
                      type="text"
                      onChange={(event) => handleChange(event)}
                      value={texto.price}
                    />
                  ) : (
                    <input
                      type="text"
                      className="valorInput"
                      value={product.price}
                      readOnly
                    />
                  )}
                </div>
                <div className="inputProp">
                  <h4 className="Props">Color:</h4>
                  {editando ? (
                    <input
                      className="valorInput"
                      type="text"
                      name="color"
                      onChange={(event) => handleChange(event)}
                      value={texto.color}
                    />
                  ) : (
                    <input
                      type="text"
                      className="valorInput"
                      value={product.color}
                      readOnly
                    />
                  )}
                </div>
                <div className="inputProp">
                  <h4 className="Props">Stock:</h4>
                  {editando ? (
                    <input
                      className="valorInput"
                      type="text"
                      name="stock"
                      onChange={(event) => handleChange(event)}
                      value={texto.stock}
                    />
                  ) : (
                    <input
                      type="text"
                      className="valorInput"
                      value={product.stock}
                      readOnly
                    />
                  )}
                </div>
                <div className="inputProp">
                  <h4 className="Props">Peso:</h4>
                  {editando ? (
                    <input
                      className="valorInput"
                      type="text"
                      name="weight"
                      onChange={(event) => handleChange(event)}
                      value={texto.weight}
                    />
                  ) : (
                    <input
                      type="text"
                      className="valorInput"
                      value={product.weight}
                      readOnly
                    />
                  )}
                </div>
                <div className="inputPropDescripcion">
                  <h4 className="Props">Descripcion:</h4>
                  {editando ? (
                    <input
                      className="valorInputDescripcion"
                      type="text"
                      name="description"
                      onChange={(event) => handleChange(event)}
                      value={texto.description}
                    />
                  ) : (
                    <input
                      type="text"
                      className="valorInput"
                      value={product.description}
                      readOnly
                    />
                  )}
                </div>
              </div>
              <div className="Btn">
                <button onClick={editarTexto}>Editar</button>
                <button className="button" onClick={handlerSubmit}>
                  Guardar
                </button>
              </div>
              {sendForm && <p>"Producto agregado con exito"</p>}
            </Title>
          </Head>
        </div>
      </div>
    </Sidebar>
  );
};

export default AdminDetail;

const linksArray = [
  {
    label: "Home Page",
    icon: <AiFillHome size={30} />,
    to: "/home",
  },
  {
    label: "Reviews",
    icon: <AiOutlineComment size={30} />,
    to: "/Admin/reviews",
  },
  {
    label: "Productos",
    icon: <AiOutlineForm size={30} />,
    to: "/Admin/myProducts",
  },
  {
    label: "Crear Producto",
    icon: <AiFillHome size={30} />,
    to: "/Admin/form",
  },
  {
    label: "Usuarios",
    icon: <AiFillHome size={30} />,
    to: "/Admin/usuarios",
  },
];
