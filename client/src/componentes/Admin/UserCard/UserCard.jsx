import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
// import {
//   CardDiv,
//   LinkText,
//   ProductImage,
//   TextName,
//   TextPrice,
// } from "./CardStyle";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getUserById, putAdminUser } from "../../../redux/actions";

const Productos = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  border-bottom: 1px dashed #999;
  align-items: center;
`;
const PStyledProductId = styled.p`
  width: 20%;
  color: black;
  margin-left: 1px;
  margin-right: 1px;
`;
const PStyledProduct = styled.p`
  width: 100%;
  color: black;
  margin-left: 1px;
  margin-right: 1px;
`;
const PStyledProductAdmin = styled.p`
  width: 50%;
  margin-left: 1px;
  margin-right: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChangeState = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${(props) => (props.setRole ? "indigo" : "salmon")};
  cursor: pointer;
  color: white;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
function UserCard({ id, name, email, admin }) {
  const dispatch = useDispatch();

  const [role, setRole] = useState(admin);

  const adminHandler = (id) => {
    setRole(!role);
    dispatch(putAdminUser(id));
  };

  useEffect(() => {
    dispatch(getUserById(id));
    // eslint-disable-next-line
  }, [role]);

  return (
    <Productos>
      <PStyledProductId key={id}>{id}</PStyledProductId>
      <PStyledProduct key="name">{name}</PStyledProduct>
      <PStyledProduct key="email">{email}</PStyledProduct>
      <PStyledProductAdmin>
        <ChangeState setRole={role} onClick={() => adminHandler(id)}>
          {role ? "Admin" : "Usuario"}
        </ChangeState>
      </PStyledProductAdmin>
    </Productos>
  );
}
export default UserCard;
