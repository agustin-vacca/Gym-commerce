import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Outlet } from "react-router-dom";

function RutasUser() {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  console.log("user usuario", user);

  if (!isAuthenticated) {
    return loginWithRedirect();
  }
  return <Outlet />;
}

export default RutasUser;
