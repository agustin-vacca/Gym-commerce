import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import NavBarAdmin from "../../componentes/NavBarAdmin/NavBarAdmin";
import { createProducts } from "../../redux/actions";
import { FormStyle } from "./FormStyles";
import { uploadFile } from "../../firebase/config";

const Formulario = () => {
  const dispatch = useDispatch();
  const [categoria, setCategoria] = useState("");
  const [sendForm, setSendForm] = useState(false);
  const [file, setFile] = useState(null);

  const Handlercategory = async () => {
    const categoria = await axios(`http://localhost:3001/categorias`);
    setCategoria(categoria.data);
  };

  const handlerImage = async (e) => {
    try {
      const result = await uploadFile(e);
      console.log(result);
      setFile(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Handlercategory();
  }, []);

  return (
    <>
    
      <NavBarAdmin />
    <FormStyle>
      <div>
        <h1>
          <u>Añade un producto al catalogo</u>
        </h1>
      </div>
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
          } else if (!/^[a-zA-Z0-9_ ]{3,20}$/.test(values.name)) {
            errors.name = "El nombre solo puede contener letras y números";
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
          } else if (!/^[a-zA-Z0-9]+$/.test(values.description)) {
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
          setTimeout(() => setSendForm(false), 5000);
          resetForm();
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
            <div className="formSection">
              <div className="sctionInput">
                <label className="label" htmlFor="name">
                  Nombre:{" "}
                </label>
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
                component={() => <div className="error">{errors.name}</div>}
              />
            </div>

            <div className="formSection">
              <div className="sctionInput">
                <label className="label" htmlFor="price">
                  Precio:{" "}
                </label>
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
                component={() => <div className="error">{errors.price}</div>}
              />
            </div>
            <div className="formSection">
              <div className="sctionInput">
                <label className="label" htmlFor="weight">
                  Peso:{" "}
                </label>
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
                component={() => <div className="error">{errors.weight}</div>}
              />
            </div>
            <div className="sectionImage">
              <div className="sctionInput">
                <label className="label" htmlFor="image">
                  Imagen:{" "}
                </label>
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
            <div className="formSection">
              <div className="sctionInput">
                <label className="label" htmlFor="color">
                  Color:{" "}
                </label>
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
                component={() => <div className="error">{errors.color}</div>}
              />
            </div>

            <div className="formSection">
              <div className="sctionInput">
                <label className="label" htmlFor="category">
                  Categoria:
                </label>
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
                component={() => <div className="error">{errors.category}</div>}
              />
            </div>
            <div className="formSection">
              <div className="sctionInput">
                <label className="label" htmlFor="stock">
                  Stock:
                </label>
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
                component={() => <div className="error">{errors.stock}</div>}
              />
            </div>
            <div className="formSection">
              <div className="sctionInput">
                <label className="label" htmlFor="category">
                  Descripción:
                </label>
                <Field
                  className="textarea"
                  name="description"
                  as="textarea"
                  placeholder="Descripcion"
                />
              </div>
              <ErrorMessage
                name="description"
                component={() => (
                  <div className="error">{errors.description}</div>
                )}
              />
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
      
    </FormStyle>
    </>
  );
};

export default Formulario;
