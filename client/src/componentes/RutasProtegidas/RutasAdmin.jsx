import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterByAdmin } from "../../redux/actions";

function RutasAdmin() {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  console.log("user usuario", user);
  const dispatch = useDispatch();
  const admins = useSelector( e => e.admins)
  const correos = []
  let arrayCorreos = admins.map( e => correos.push(e.email) );

  useEffect( () => {
    dispatch(filterByAdmin())
  },[user])

  if (isAuthenticated) {
    if (!correos.includes(user.email)) {
      return (
        alert("No tiene permisos para ingresar a esta seccion"),
        (<Navigate to="/home" />)
      );
    }
    return <Outlet />;
  }
  return loginWithRedirect();
}

export default RutasAdmin;
