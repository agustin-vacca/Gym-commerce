import { useAuth0 } from "@auth0/auth0-react";
import React  from "react";
//import { createUsers } from "../../redux/actions";
//import { useDispatch } from "react-redux";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  //const dispatch = useDispatch();

  // const addUserHandler = () => {
  //   dispatch(createUsers(user))
  // }
  
  return <div onClick={() => loginWithRedirect()}> Login </div>;
};
export default Login;
