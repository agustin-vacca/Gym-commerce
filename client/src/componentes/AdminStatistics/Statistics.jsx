import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAdmin } from "../../redux/actions";

const Statistics = () => {
  const dispatch = useDispatch();
  const dataProducts = useSelector((state) => state.adminProducts);
  const dataUsers = useSelector((state) => state.users);
  const dataUser = useSelector((state) => state.user);
  const dataCategories = useSelector((state) => state.categories);
  console.log("", dataProducts.leng);
  console.log("dataUsers", dataUsers);
  console.log("dataUser", dataUser);
  console.log("dataCategories", dataCategories);

  useEffect(() => {
    dispatch(getAllProductsAdmin());
  }, []);

  return (
    <>
      <div>
        <h3>Productos</h3>
        <div>{dataProducts.length}</div>
      </div>
      <div>
        <h3>Categorias</h3>
        <div>{dataCategories.length}</div>
      </div>
    </>
  );
};

export default Statistics;
