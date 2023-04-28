import React from "react";
import NavBarAdmin from "../../componentes/NavBarAdmin/NavBarAdmin";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Switch.css"
import edit from "./pencil-square.svg"
const ProductsContainer = styled.div`
  background: #808080;
  border-radius: 15px;
  max-height: 600px;
  min-height: 600px;
  overflow-y: auto;
  margin-left: 10%;
  margin-right:10%;
`
const Recuadros = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    gap:10%;
    border-bottom: 1px solid black;
    margin:3%;
    color:black;
`
const Productos =styled.div`
   display:flex;
   flex-direction:row;   
   justify-content:center;
   gap:11%;
   border-bottom: 1px dashed  black;
   margin-right:3%;
   margin-left:3%;
   align-items: baseline;
`
const PStyledProduct = styled.p`
    width: 5%;
    color:black;
`
const ImgGrande = styled.img`
    width:150%;
    background: #9f9f9f;
    padding: 2px;
    border-radius: 5px;
`
const Btn = styled.button`
    margin:12px;
    color:black;
    padding:8px;
    border-radius:10px;
`

export default function AdminProducts(){
    return(
        <>
            <NavBarAdmin/>
            <ProductsContainer>
                <Recuadros>
                    <p>Nombre:</p>
                    <p>Precio:</p>
                    <p>Stock:</p>
                    <p>Categoria:</p>
                    <p>Estado:</p>
                    <p>Editar</p>
                </Recuadros>
                <Productos>   
                    <PStyledProduct>Lorem</PStyledProduct>
                    <PStyledProduct>Lorem</PStyledProduct>             
                    <PStyledProduct>Lorem</PStyledProduct>
                    <PStyledProduct>Lorem</PStyledProduct>
                    <label class="switch">
                        <input type="checkbox"/>
                        <span class="slider round"></span>
                    </label>
                <Link to="/Admin/productos/editar">
                    <ImgGrande src={edit}/>
                </Link>
                </Productos>

                <Btn>
                    <a href="/admin/productos/nuevo">Agregar producto</a>
                </Btn>
            </ProductsContainer>
        </>
    )
}