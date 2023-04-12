import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import styled from "styled-components";

const Formulario = () => {
  const [Forms, setForms] = useState(false);

  return (
    <Wall>
      <Formik
        initialValues={{
          nombre: "",
          precio: "",
          peso: "",
          descripcion: "",
          imagen: "",
          categoria: "",
          stock: "",
          create_date: "",
        }}
        validate={(value) => {
          let errores = {};

          //validaciones
          if (!value.nombre) {
            errores.nombre = "Ingrese un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacios";
          }

          /* if (!value.correo) {
            errores.correo = "Ingrese un correo";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              value.correo
            )
          ) {
            errores.correo =
              "El correo solo puede contener letras, numeros, puntos y guiones";
          } */
          return errores;
        }}
        onSubmit={(value, { resetForm }) => {
          resetForm();
          setForms(true);
          setTimeout(() => setForms(false), 5000);
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
            <div>
              <Label htmlFor="nombre">Nombre: </Label>
              <Field
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Escriba su nombre "
              />
              <ErrorMessage
                name="nombre"
                component={() => <div className="error">{errors.nombre}</div>}
              />
            </div>
            <div>
              <Label htmlFor="precio">Precio: </Label>
              <Field
                type="text"
                id="precio"
                name="precio"
                placeholder="Escriba su precio "
              />
              <ErrorMessage
                name="precio"
                component={() => <div className="error">{errors.precio}</div>}
              />
            </div>
            <div>
              <Label htmlFor="peso">Peso: </Label>
              <Field
                type="text"
                id="peso"
                name="peso"
                placeholder="Escriba su peso "
              />
              <ErrorMessage
                name="peso"
                component={() => <div className="error">{errors.peso}</div>}
              />
            </div>
            <div>
              <Label htmlFor="descripcion">Descripcion: </Label>
              <Field
                type="text"
                id="descripcion"
                name="descripcion"
                placeholder="Escriba su descripcion "
              />
              <ErrorMessage
                name="descripcion"
                component={() => (
                  <div className="error">{errors.descripcion}</div>
                )}
              />
            </div>
            <div>
              <Label htmlFor="imagen">Imagen: </Label>
              <Field
                type="text"
                id="imagen"
                name="imagen"
                placeholder="Escriba su imagen "
              />
              <ErrorMessage
                name="imagen"
                component={() => <div className="error">{errors.imagen}</div>}
              />
            </div>
            <div>
              <Label htmlFor="categoria">Categoria: </Label>
              <Field
                type="text"
                id="categoria"
                name="categoria"
                placeholder="Escriba su categoria "
              />
              <ErrorMessage
                name="categoria"
                component={() => (
                  <div className="error">{errors.categoria}</div>
                )}
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
              <Label htmlFor="create_date">Fecha de creacion: </Label>
              <Field
                type="text"
                id="create_date"
                name="create_date"
                placeholder="Escriba su create_date "
              />
              <ErrorMessage
                name="create_date"
                component={() => (
                  <div className="error">{errors.create_date}</div>
                )}
              />
            </div>
            <div>
              <Field name="pais" as="select">
                <option value="mexico">Mexico</option>
                <option value="argentina">Argentina</option>
                <option value="colombia">Colombia</option>
              </Field>
            </div>
            <div>
              <Label>
                <Field type="radio" name="sexo" value="hombre" />
                Hombre
              </Label>
              <Label>
                <Field type="radio" name="sexo" value="mujer" />
                Mujer
              </Label>
            </div>
            <div>
              <Field name="mensaje" as="textarea" placeholder="Descripcion" />
            </div>
            <Button type="submit">Enviar </Button>
          </Form>
        )}
      </Formik>
    </Wall>
  );
};

export default Formulario;

const Wall = styled.form`
  background: #33312f;
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-content: center;
`;
const Label = styled.label`
  margin: 20px 20px;
`;
const Input = styled.input`
  margin: 20px 20px;
`;

const Button = styled.button`
  margin: 20px;
`;
