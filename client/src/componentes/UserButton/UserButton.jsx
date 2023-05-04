import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import { UserBtnDiv } from "./UserButtonStyled";
import { createUsers, filterByAdmin } from "../../redux/actions";
//import { createUsers } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const UserButton = () => {
  const { user, isAuthenticated } = useAuth0();
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const [admin, setAdmin] = useState(false);
  const admins = useSelector( e => e.admins)

  useEffect( () => {
    dispatch(createUsers(user))
    dispatch(filterByAdmin())
  },[dispatch,user])

  useEffect( () => {
    if( user ) {
      const localActual = localStorage.getItem("usuario")
      const objParseado = JSON.parse(localActual)
      const newLocal = objParseado;
      const coincidente = newLocal.admins.map( e => ( e.email === user.email)) 
      const isAdmin = coincidente.find( e => e === true)
      setAdmin(isAdmin)
      newLocal.user = admins;
      localStorage.setItem("usuario",JSON.stringify(newLocal))
      // const ultimoLocal = localStorage.getItem("usuario")
    }
  },[user, admins])

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
              <h3 className="profileName">{user.name}</h3>
            </div>
            {
              admin === true ? 
              <div>
                <li>
                  <Link
                    className="Li"
                    to="/Admin/dashboard"
                    onClick={() => setActive(!active)}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className="Li"
                    to="/Admin/form"
                    onClick={() => setActive(!active)}
                  >
                    Crear producto
                  </Link>
                </li>
              </div>
            :
              null
            }
            
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
