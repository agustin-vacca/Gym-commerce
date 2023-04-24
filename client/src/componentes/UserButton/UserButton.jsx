import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import { UserBtnDiv } from "./UserButtonStyled";

const UserButton = () => {
  const { user, isAuthenticated } = useAuth0();
  const [active, setActive] = useState(false);
  return (
    <UserBtnDiv>
      <div onClick={() => setActive(!active)}>
        {isAuthenticated ? (
          <img className="profileImg" src={user.picture} alt={user.nickname} />
        ) : (
          <HiOutlineUserCircle size={45} />
        )}
      </div>
      <div className="Menu" style={active ? null : { display: "none" }}>
        {isAuthenticated ? (
          <ul className="Ul">
            <div className="profile">
              <h3 className="profileName">{user.given_name}</h3>
            </div>
            <li>
              <Link
                className="Li"
                to="/dashboard"
                onClick={() => setActive(!active)}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                className="Li"
                to="/form"
                onClick={() => setActive(!active)}
              >
                Crear producto
              </Link>
            </li>
            <li>
              <Logout />
            </li>
          </ul>
        ) : (
          <ul className="Ul">
            <li className="Li">
              <Login />
            </li>
          </ul>
        )}
      </div>
    </UserBtnDiv>
  );
};
export default UserButton;
