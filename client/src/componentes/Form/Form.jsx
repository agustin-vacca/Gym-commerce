import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createProducts } from "../../redux/actions";

const Formulario = () => {
  const dispatch = useDispatch();
  const [sendForm, setSendForm] = useState(false);
  const [product, setProduct] = useState();
  const send = () => {
    dispatch(createProducts(product));
  };

  return (
    <Wall>
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
          } else if (/^[a-zA-Z0-9]+$/.test(values.name)) {
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
          } else if (/^[a-zA-Z0-9]+([a-zA-Z0-9]+)$/.test(values.weight)) {
            errors.weight = "El peso solo puede contener cantidad y medida";
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
          if (!values.image) {
            errors.image = "Ingrese una imagen";
          } else if (!/\.(gif|jpg|jpeg|png)$/i.test(values.image)) {
            errors.image =
              "La imagen debe ser un archivo de imagen válido (gif, jpg, jpeg o png)";
          }
          // Validación de stock
          if (!values.stock) {
            errors.stock = "Ingrese un stock";
          } else if (!/^[0-9]+$/.test(values.stock)) {
            errors.stock = "El stock solo puede contener números";
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          setProduct(values);
          send();
          setSendForm(true);
          setTimeout(() => setSendForm(false), 5000);
          resetForm();
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
            <div>
              <Label htmlFor="name">Nombre: </Label>
              <Field
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
              <Label htmlFor="price">Precio: </Label>
              <Field
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
              <Label htmlFor="weight">Peso: </Label>
              <Field
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
              <Label htmlFor="image">Imagen: </Label>
              <Field
                type="text"
                id="image"
                name="image"
                placeholder="Ingrese la imagen"
              />
              <ErrorMessage
                name="image"
                component={() => <div className="error">{errors.image}</div>}
              />
            </div>
            <div>
              <Label htmlFor="category">Categoria: </Label>
              <Field name="category" as="select">
                <option value="default" disable="true">
                  -Eliga una categoria-
                </option>
                <option value="Mancuernas">Mancuernas</option>
                <option value="Maquinas">Maquinas</option>
                <option value="Rack">Rack</option>
                <option value="Discos y Barras">Discos y Barras</option>
                <option value="Accesorios">Accesorios</option>
              </Field>
              <ErrorMessage
                name="category"
                component={() => <div className="error">{errors.category}</div>}
              />
            </div>
            <div>
              <Label htmlFor="stock">Stock: </Label>
              <Field
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
              <Field
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
            <Button
              type="submit"
              disabled={Object.keys(errors).length === 0 ? false : true}
            >
              Enviar
            </Button>
            {sendForm && <Par>"Producto agregado con exito"</Par>}
          </Form>
        )}
      </Formik>
    </Wall>
  );
};

export default Formulario;

const Wall = styled.div`
  background: #f3f1f1;
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-content: center;

  .error {
    color: #830404;
  }
`;
const Label = styled.label`
  margin: 20px 20px;
`;
const Button = styled.button`
  margin: 20px;
`;
const Par = styled.p`
  color: #3a5e04;
`;
