import React, { useEffect, useState } from "react";
import NavBarAdmin from "../../componentes/NavBarAdmin/NavBarAdmin";
import styled from "styled-components";
import "./Switch.css";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../../componentes/Admin/UserCard/UserCard";
import { getUsers  } from "../../redux/actions";

const Container = styled.div`
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
    gap:20%;
    border-bottom: 1px solid black;
    margin:3%;
    color:black;
`

export default function AdminUsers(){

    const dispatch = useDispatch();
    const usuarios = useSelector( state => state.users )

    const mostrar = () => {
        console.log("estos son los: ", usuarios)
    }

    const [change, setChange] = useState(false)

    useEffect( () => {
        dispatch(getUsers());
        // eslint-disable-next-line
    },[change])

    return(
        <>
            <NavBarAdmin/>
            <Container>
            <button onClick={() => mostrar()}> ver2 </button>
                <Recuadros>
                    <p>Id:</p>
                    <p>Nombre:</p>
                    <p>Mail:</p>
                    <p>Admin:</p>
                </Recuadros>

                {usuarios.map( e => {
                        return(
                            <UserCard 
                            id={e.id}
                            name={e.name}
                            email={e.email}
                            admin={e.admin}
                            setChange = {setChange} 
                            />
                        );
                    })}      
            </Container>
        </>
    )
}