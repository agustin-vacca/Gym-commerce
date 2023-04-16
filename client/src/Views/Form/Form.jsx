import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "../../componentes/Footer/Footer";
import NavBar from "../../componentes/NavBar/NavBar";
import { createProducts } from "../../redux/actions";
import { FormStyle } from "./FormStyles";
import { uploadFile } from "../../firebase/config"

const Formulario = () => {
  const dispatch = useDispatch();
  const [categoria, setCategoria] = useState("");
  const [sendForm, setSendForm] = useState(false);
  const [file, setFile] = useState(null);

  const Handlercategory = async () => {
    const categoria = await axios(`http://localhost:3001/categorias`);
    setCategoria(categoria.data);
  };

  const handlerImage = async(e) => {
    try {
      const result = await uploadFile(e);
      console.log(result)
      setFile(result)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    Handlercategory();
  }, []);

  return (
    <FormStyle>
      <NavBar />
      <div>
        <h1>
          <u>Crea un producto</u>
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
        }}
        validate={(values) => {
          let errors = {};
          // Validación de nombre
          if (!values.name) {
            errors.name = "Ingrese un nombre";
          } else if (!/^[a-zA-Z0-9]+$/.test(values.name)) {
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
          } else if (/^[a-zA-Z0-9]+$/.test(values.description)) {
            errors.description =
              "La descripción solo puede contener letras y números";
          }
          // Validación de imagen
          // if (!values.image) {
          //   errors.image = "Ingrese una imagen";
          // } else if (!/\.(gif|jpg|jpeg|png)$/i.test(values.image)) {
          //   errors.image =
          //     "La imagen debe ser un archivo de imagen válido (gif, jpg, jpeg o png)";
          // }
          // Validación de stock
          if (!values.stock) {
            errors.stock = "Ingrese un stock";
          } else if (!/^[0-9]+$/.test(values.stock)) {
            errors.stock = "El stock solo puede contener números";
          }
          return errors;
        }}

        // handlerImage={async(e,values) => {
        //   try {
        //     const result = await uploadFile(e);
        //     console.log(result)
        //     setFile(result)
        //     values.image = file
        //   } catch (error) {
        //     console.log(error)
        //    }
        // }}

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
            <div>
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
              <ErrorMessage
                name="name"
                component={() => <div className="error">{errors.name}</div>}
              />
            </div>
            <div>
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
              <ErrorMessage
                name="price"
                component={() => <div className="error">{errors.price}</div>}
              />
            </div>
            <div>
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
              <ErrorMessage
                name="weight"
                component={() => <div className="error">{errors.weight}</div>}
              />
            </div>
            <div>
              <label className="label" htmlFor="image">
                Imagen:{" "}
              </label>
              {/* <Field
                className="input"
                type="text"
                id="image"
                name="image"
                placeholder="Ingrese la imagen"
              /> */}
              {/* Este codigo hace que la prop de imagen tenga el boton examinar para cargar las imagenes*/}
              <Field
                type="file"
                name="image"
                className="input"
                id="image"
                onChange = {  e => handlerImage(e.target.files[0])}
              />
              <ErrorMessage
                name="image"
                component={() => <div className="error">{errors.image}</div>}
              />
            </div>
            <div>
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
              <ErrorMessage
                name="category"
                component={() => <div className="error">{errors.category}</div>}
              />
            </div>
            <div>
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
              <ErrorMessage
                name="stock"
                component={() => <div className="error">{errors.stock}</div>}
              />
            </div>
            <div>
              <label className="label" htmlFor="category">
                Descripción:
              </label>
              <Field
                className="textarea"
                name="description"
                as="textarea"
                placeholder="Descripcion"
              />
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
      <Footer />
    </FormStyle>
  );
};

export default Formulario;
