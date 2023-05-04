import React from "react";
import {
  AiFillHome,
  AiOutlineComment,
  AiOutlineForm,
  AiOutlineUser,
} from "react-icons/ai";
import { FaDumbbell } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoImage from "../../cardiganRectangulo.png";
import { Sidebar } from "../DashBoard/DashBoardStyles";

export default function FormularioEditarProducto() {
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
                <div className="label">
                  <div>{label}</div>
                  <div>{icon}</div>
                </div>
              </Link>
            ))}
        </div>
        <div className="contenidoDash"></div>
      </div>
    </Sidebar>
  );
}

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

/* 

        <FormStyle>
          <Formik
            initialValues={{
              nombre: "",
              precio: "",
              peso: "",
              descripcion: "",
              color: "",
              stock: "",
            }}
            validate={(valores) => {
              let errores = {};

              if (
                !valores.nombre &&
                !valores.precio &&
                !valores.peso &&
                !valores.descripcion &&
                !valores.color &&
                !valores.stock
              ) {
                errores.nombre = "Por favor complete por lo menos un campo";
              } else if (!/^(|[a-zA-ZÀ-ÿ\s]{1,40})$/.test(valores.nombre)) {
                errores.nombre =
                  "El nombre solo puede contener letras, espacios y no mas de 40 caracteres";
              }
              if (
                !/^(0.|[1-9]|[1-9][0-9]{1,3}|[1-4][0-9]{3}|5000)?$/.test(
                  valores.precio
                )
              ) {
                errores.precio =
                  "El precio solo puede ser un numero del 1 al 9999.";
              }
              if (
                !/^(0.|[1-9]|[1-9][0-9]{1,3}|[1-4][0-9]{3}|5000)?$/.test(
                  valores.peso
                )
              ) {
                errores.peso =
                  "El peso solo puede ser un numero del 1 al 9999.";
              }
              if (!/^(|[a-zA-ZÀ-ÿ\s]{1,40})$/.test(valores.descripcion)) {
                errores.descripcion =
                  "La descripcion solo puede contener letras, espacios y no mas de 40 caracteres";
              }
              if (!/^(|[a-zA-ZÀ-ÿ\s]{1,40})$/.test(valores.descripcion)) {
                errores.color =
                  "El color solo puede contener letras, espacios y no mas de 40 caracteres";
              }
              if (
                !/^(0.|[1-9]|[1-9][0-9]{1,3}|[1-4][0-9]{3}|5000)?$/.test(
                  valores.stock
                )
              ) {
                errores.stock =
                  "El stock solo puede ser un numero del 1 al 9999.";
              }

              return errores;
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
                <h2>Editar el Producto</h2>
                <div>
                  <Campo>
                    <label htmlFor="nombre">Nombre del producto:</label>
                    <Field
                      className="stiloDmerga"
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeholder="Nombre"
                    />
                  </Campo>
                  <ErrorMsje>
                    <ErrorMessage
                      name="nombre"
                      component={() => (
                        <div className="error">{errors.nombre}</div>
                      )}
                    />
                  </ErrorMsje>
                </div>
                <div>
                  <Campo>
                    <label htmlFor="precio">Precio del producto:</label>
                    <Field
                      className="stiloDmerga"
                      type="text"
                      id="precio"
                      name="precio"
                      placeholder="Precio"
                    />
                  </Campo>
                  <ErrorMsje>
                    <ErrorMessage
                      name="precio"
                      component={() => (
                        <div className="error">{errors.precio}</div>
                      )}
                    />
                  </ErrorMsje>
                </div>
                <div>
                  <Campo>
                    <label htmlFor="peso">Peso del Producto:</label>
                    <Field
                      className="stiloDmerga"
                      type="text"
                      id="peso"
                      name="peso"
                      placeholder="Peso"
                    />
                  </Campo>
                  <ErrorMsje>
                    <ErrorMessage
                      name="peso"
                      component={() => (
                        <div className="error">{errors.peso}</div>
                      )}
                    />
                  </ErrorMsje>
                </div>
                <div>
                  <Campo>
                    <label htmlFor="descripcion">
                      Descripcion del Producto:
                    </label>
                    <Field
                      className="stiloDmerga"
                      type="text"
                      id="descripcion"
                      name="descripcion"
                      placeholder="Descripcion"
                    />
                  </Campo>
                  <ErrorMsje>
                    <ErrorMessage
                      name="descripcion"
                      component={() => (
                        <div className="error">{errors.descripcion}</div>
                      )}
                    />
                  </ErrorMsje>
                </div>
                <div>
                  <Campo>
                    <label htmlFor="color">Color del producto:</label>
                    <Field
                      className="stiloDmerga"
                      type="text"
                      id="color"
                      name="color"
                      placeholder="Color"
                    />
                  </Campo>
                  <ErrorMsje>
                    <ErrorMessage
                      name="color"
                      component={() => (
                        <div className="error">{errors.color}</div>
                      )}
                    />
                  </ErrorMsje>
                </div>
                <div>
                  <Campo>
                    <label htmlFor="stock">Stock del producto:</label>
                    <Field
                      className="stiloDmerga"
                      type="text"
                      id="stock"
                      name="stock"
                      placeholder="Stock"
                    />
                  </Campo>
                  <ErrorMsje>
                    <ErrorMessage
                      name="stock"
                      component={() => (
                        <div className="error">{errors.stock}</div>
                      )}
                    />
                  </ErrorMsje>
                </div>
                <ErrorMsje>
                  <ErrorMessage
                    name="nombre"
                    component={() => (
                      <div className="error">{errors.nombre}</div>
                    )}
                  />
                </ErrorMsje>

                <Confirmar type="submit">Enviar</Confirmar>
              </Form>
            )}
          </Formik>
        </FormStyle>
*/
