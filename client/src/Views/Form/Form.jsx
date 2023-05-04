import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import {
  AiFillHome,
  AiOutlineComment,
  AiOutlineForm,
  AiOutlineUser,
} from "react-icons/ai";
import { FaDumbbell } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logoImage from "../../cardiganRectangulo.png";
import Card from "../../componentes/Card/Card";
import { uploadFile } from "../../firebase/config";
import { ApiUrl, createProducts } from "../../redux/actions";
import { Sidebar } from "../DashBoard/DashBoardStyles";
import { FormStyle } from "./FormStyles";

const Formulario = () => {
  const dispatch = useDispatch();
  const [categoria, setCategoria] = useState("");
  const [sendForm, setSendForm] = useState(false);
  const [file, setFile] = useState(null);
  const [dataCard, setDataCard] = useState("");

  const Handlercategory = async () => {
    const categoria = await axios(`${ApiUrl}/categorias`);
    setCategoria(categoria.data);
  };

  const handlerImage = async (e) => {
    try {
      const result = await uploadFile(e);
      setFile(result);
    } catch (error) {}
  };

  useEffect(() => {
    Handlercategory();
  }, []);

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
                    label === "Crear Producto" ? "labelComponente" : "label"
                  }
                >
                  <div>{label}</div>
                  <div>{icon}</div>
                </div>
              </Link>
            ))}
        </div>
        <div className="contenidoDash">
          <FormStyle>
            <h3 className="title">Ingrese la siguiente informacion</h3>
            <div className="componente">
              <Formik
                initialValues={{
                  name: "",
                  price: "",
                  weight: "",
                  description: "",
                  image: "",
                  category: "",
                  stock: "",
                  color: "",
                }}
                validate={(values) => {
                  let errors = {};
                  // Validación de nombre
                  if (!values.name) {
                    errors.name = "Ingrese un nombre";
                  } else if (!/^[a-zA-Z0-9_ ]{3,50}$/.test(values.name)) {
                    errors.name =
                      "El nombre solo puede contener letras y números";
                  }
                  // Validación de precio
                  if (!values.price) {
                    errors.price = "Ingrese un precio";
                  } else if (!/^[0-9]+$/.test(values.price)) {
                    errors.price = "El precio solo puede contener números";
                  }
                  // Validación de peso
                  if (!values.weight) {
                    errors.weight = "Ingrese un peso";
                  } else if (!/^[0-9]+$/.test(values.weight)) {
                    errors.weight = "El peso solo puede contener cantidad";
                  }
                  if (!values.category) {
                    errors.category = "Ingrese un categoria";
                  } else if (values.category === "default") {
                    errors.category = "Debe Eligir una categoria";
                  }
                  // Validación de descripción
                  if (!values.description) {
                    errors.description = "Ingrese una descripción";
                  } else if (
                    !/^[a-zA-Z0-9_ ]{3,150}$/.test(values.description)
                  ) {
                    errors.description =
                      "La descripción solo puede contener letras y números";
                  }
                  // Validación de stock
                  if (!values.stock) {
                    errors.stock = "Ingrese un stock";
                  } else if (!/^[0-9]+$/.test(values.stock)) {
                    errors.stock = "El stock solo puede contener números";
                  }
                  if (!values.color) {
                    errors.color = "Ingrese un color";
                  } else if (!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(values.color)) {
                    errors.color = "El color solo puede contener letras";
                  }
                  return errors;
                }}
                onSubmit={async (values, { resetForm }) => {
                  values.image = file;
                  dispatch(createProducts(values));
                  setSendForm(true);
                  setDataCard(values);
                  setTimeout(() => setSendForm(false), 5000);
                  resetForm();
                }}
              >
                {({ errors }) => (
                  <Form className="formulario">
                    <div className="formSection">
                      <div className="sctionInput">
                        <Field
                          className="input"
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Nombre del producto"
                        />
                      </div>
                      <ErrorMessage
                        name="name"
                        component={() => (
                          <div className="error">{errors.name}</div>
                        )}
                      />
                    </div>

                    <div className="formSection">
                      <div className="sctionInput">
                        <Field
                          className="input"
                          type="text"
                          id="price"
                          name="price"
                          placeholder="Escriba el precio"
                        />
                      </div>
                      <ErrorMessage
                        name="price"
                        component={() => (
                          <div className="error">{errors.price}</div>
                        )}
                      />
                    </div>

                    <div className="formSection">
                      <div className="sctionInput">
                        <Field
                          className="input"
                          type="text"
                          id="weight"
                          name="weight"
                          placeholder="Escriba el peso"
                        />
                      </div>
                      <ErrorMessage
                        name="weight"
                        component={() => (
                          <div className="error">{errors.weight}</div>
                        )}
                      />
                    </div>

                    <div className="formSection">
                      <div className="sctionInput">
                        <Field
                          className="input"
                          type="text"
                          id="color"
                          name="color"
                          placeholder="Color del producto"
                        />
                      </div>
                      <ErrorMessage
                        name="color"
                        component={() => (
                          <div className="error">{errors.color}</div>
                        )}
                      />
                    </div>

                    <div className="formSection">
                      <div className="sctionInput">
                        <Field className="selector" name="category" as="select">
                          <option value="default" disable="true">
                            -Eliga una categoria-
                          </option>
                          {categoria &&
                            categoria.map((el) => (
                              <option key={el.id} value={el.id}>
                                {el.name}
                              </option>
                            ))}
                        </Field>
                      </div>
                      <ErrorMessage
                        name="category"
                        component={() => (
                          <div className="error">{errors.category}</div>
                        )}
                      />
                    </div>

                    <div className="formSection">
                      <div className="sctionInput">
                        <Field
                          className="input"
                          type="text"
                          id="stock"
                          name="stock"
                          placeholder="Escriba su stock "
                        />
                      </div>
                      <ErrorMessage
                        name="stock"
                        component={() => (
                          <div className="error">{errors.stock}</div>
                        )}
                      />
                    </div>

                    <div className="formSectionText">
                      <div className="sctionInputText">
                        <Field
                          className="textarea"
                          name="description"
                          as="textarea"
                          placeholder="Escriba una descripcion del producto"
                        />
                      </div>
                      <ErrorMessage
                        name="description"
                        component={() => (
                          <div className="error">{errors.description}</div>
                        )}
                      />
                    </div>

                    <div className="sectionImage">
                      <div className="sctionImage">
                        <p className="p" htmlFor="image">
                          Agrega una imagen
                        </p>
                        <div className="frameimage">
                          {file === null ? (
                            <Field
                              type="file"
                              name="image"
                              className="input"
                              id="image"
                              onChange={(e) => handlerImage(e.target.files[0])}
                            />
                          ) : (
                            <img className="imgPic" src={file} alt="foto" />
                          )}
                        </div>
                      </div>
                    </div>

                    <button
                      className="button"
                      type="submit"
                      disabled={Object.keys(errors).length === 0 ? false : true}
                    >
                      Enviar
                    </button>
                    {sendForm && <p>"Producto agregado con exito"</p>}
                  </Form>
                )}
              </Formik>
              <div className="review">
                <Card
                  id={dataCard.id}
                  name={dataCard.name}
                  price={dataCard.price}
                  image={dataCard.image}
                />
              </div>
            </div>
          </FormStyle>
        </div>
      </div>
    </Sidebar>
  );
};

export default Formulario;

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
    icon: <FaDumbbell size={30} />,
    to: "/Admin/myProducts",
  },
  {
    label: "Crear Producto",
    icon: <AiOutlineForm size={30} />,
    to: "/Admin/form",
  },
  {
    label: "Usuarios",
    icon: <AiOutlineUser size={30} />,
    to: "/Admin/usuarios",
  },
];
