import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function RutasAdmin() {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  console.log("user usuario", user);

  const arrayCorreos = [
    "cardigangymproducts@gmail.com",
    "inmobaterealestate@gmail.com",
  ];

  if (isAuthenticated) {
    if (!arrayCorreos.includes(user.email)) {
      return (
        alert("No tiene permisos para ingresar a esta seccion"),
        (<Navigate to="/" />)
      );
    }
    return <Outlet />;
  }
  return loginWithRedirect();
}

export default RutasAdmin;
