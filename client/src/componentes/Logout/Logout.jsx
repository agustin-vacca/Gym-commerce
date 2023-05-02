import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <div
      className="Li"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Cerrar sesion
    </div>
  );
};

export default Logout;
