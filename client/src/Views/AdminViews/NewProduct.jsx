import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import NavBarAdmin from "../../componentes/NavBarAdmin/NavBarAdmin";
import styled from 'styled-components';
const FormularioNewProduct = styled.div`
    background: #808080;
    margin-left:25%;
    margin-right:25%;
    border-radius:50px;
    height:625px;
    display:flex;
    justify-content:center;
`
const Campo = styled.div`
    padding:12px;
`
const ErrorMsje = styled.div`
    color: #000000;
    background:#ff0000;
    display:flex;
    justify-content:center;    
    border-radius:10px;
    `
const Confirmar = styled.button`
    margin:12px;
    color:black;
    padding:8px;
    border-radius:10px;
`
export default function FormularioNuevoProducto(){
    return(
        <div >
            <NavBarAdmin/>
            <FormularioNewProduct>                
                <Formik
                    initialValues={{
                        nombre: '',
                        precio: '',
                        peso: '',
                        descripcion: '',                    
                        color:'',
                        stock:'',
                        fecha:''
                    }}
                    validate={(valores) => {
                        let errores = {};		
                        
                        if(!valores.nombre){
                            errores.nombre = 'Por favor ingresa el nombre del producto'
                        } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                            errores.nombre = 'El nombre solo puede contener letras, espacios y no mas de 40 caracteres'
                        }                   			
                        if(!valores.precio){
                            errores.precio = 'Por favor ingresa el precio del producto'
                        } else if(!/^(0.|[1-9]|[1-9][0-9]{1,3}|[1-4][0-9]{3}|5000)$/.test(valores.precio)){
                            errores.precio = 'El precio solo puede ser un numero del 1 al 9999.'
                        }
                        if(!valores.peso){
                            errores.peso = 'Por favor ingresa el peso del producto'
                        } else if(!/^(0.|[1-9]|[1-9][0-9]{1,3}|[1-4][0-9]{3}|5000)$/.test(valores.peso)){
                            errores.peso = 'El peso solo puede ser un numero del 1 al 9999.'
                        }
                        if(!valores.descripcion){
                            errores.descripcion = 'Por favor ingresa la descripcion'
                        } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.descripcion)){
                            errores.descripcion = 'La descripcion solo puede contener letras, espacios y no mas de 40 caracteres'
                        }
                        if(!valores.color){
                            errores.color = 'Por favor ingresa el color'
                        } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.descripcion)){
                            errores.color = 'El color solo puede contener letras, espacios y no mas de 40 caracteres'
                        }
                        if(!valores.stock){
                            errores.stock = 'Por favor ingresa el stock del producto'
                        } else if(!/^(0.|[1-9]|[1-9][0-9]{1,3}|[1-4][0-9]{3}|5000)$/.test(valores.stock)){
                            errores.stock = 'El stock solo puede ser un numero del 1 al 9999.'
                        }
                        if(!valores.fecha){
                            errores.fecha = 'Por favor ingresa la fecha de creacion'
                        } else if(!/^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(20)\d{2}$/ .test(valores.fecha)){
                            errores.fecha = 'La fecha debe ser formato DD/MM/AAAA.'
                        }				
                                        
                        return errores;
                    }}
                    
                >
                    {( {errors} ) => (
                        <Form className="formulario">   
                            <h2>Agregar Producto</h2>         
                            <div>
                                <Campo>                                    
                                    <label htmlFor="nombre">Nombre del producto:</label>
                                    <Field className="stiloDmerga"
                                        type="text" 
                                        id="nombre" 
                                        name="nombre" 
                                        placeholder="Nombre"
                                        />
                                </Campo>
                                <ErrorMsje>
                                    <ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
                                </ErrorMsje>
                            </div>
                            <div>
                                <Campo>                                    
                                    <label htmlFor="precio">Precio del producto:</label>
                                    <Field className="stiloDmerga"
                                        type="text" 
                                        id="precio" 
                                        name="precio" 
                                        placeholder="Precio"
                                        />
                                </Campo>
                                <ErrorMsje>
                                    <ErrorMessage name="precio" component={() => (<div className="error">{errors.precio}</div>)} />
                                </ErrorMsje>
                            </div>
                            <div>
                                <Campo>                                    
                                    <label htmlFor="peso">Peso del Producto:</label>
                                    <Field className="stiloDmerga"
                                        type="text" 
                                        id="peso" 
                                        name="peso" 
                                        placeholder="Peso"
                                        />
                                </Campo>
                                <ErrorMsje>
                                    <ErrorMessage name="peso" component={() => (<div className="error">{errors.peso}</div>)} />
                                </ErrorMsje>
                            </div>	
                            <div>
                                <Campo>                                    
                                    <label htmlFor="descripcion">Descripcion del Producto:</label>
                                    <Field className="stiloDmerga"
                                        type="text" 
                                        id="descripcion" 
                                        name="descripcion" 
                                        placeholder="Descripcion"
                                        />
                                </Campo>
                                <ErrorMsje>
                                    <ErrorMessage name="descripcion" component={() => (<div className="error">{errors.descripcion}</div>)} />
                                </ErrorMsje>
                            </div>	
                            <div>
                                <Campo>                                    
                                    <label htmlFor="color">Color del producto:</label>
                                    <Field className="stiloDmerga"
                                        type="text" 
                                        id="color" 
                                        name="color" 
                                        placeholder="Color"
                                        />
                                </Campo>
                                <ErrorMsje>
                                    <ErrorMessage name="color" component={() => (<div className="error">{errors.color}</div>)} />
                                </ErrorMsje>
                            </div>
                            <div>
                                <Campo>                                    
                                    <label htmlFor="stock">Stock del producto:</label>
                                    <Field className="stiloDmerga"
                                        type="text" 
                                        id="stock" 
                                        name="stock" 
                                        placeholder="Stock"
                                        />
                                </Campo>
                                <ErrorMsje>
                                    <ErrorMessage name="stock" component={() => (<div className="error">{errors.stock}</div>)} />
                                </ErrorMsje>
                            </div>
                            <div>
                                <Campo>                                    
                                    <label htmlFor="fecha">Fecha de creacion:</label>
                                    <Field className="stiloDmerga"
                                        type="text" 
                                        id="fecha" 
                                        name="fecha" 
                                        placeholder="DD/MM/AAAA"
                                        />
                                </Campo>
                                <ErrorMsje>
                                    <ErrorMessage name="fecha" component={() => (<div className="error">{errors.fecha}</div>)} />
                                </ErrorMsje>
                            </div>																		
                            <Confirmar type="submit">Enviar</Confirmar>
                            
                        </Form>
                    )}
                </Formik>
            </FormularioNewProduct>
        </div> 
    )
    }