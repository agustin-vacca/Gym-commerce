import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAdmin } from "../../redux/actions";
import Card from "../AdminCard/Card";

export default function Cards() {
  const dispatch = useDispatch();
  const adminProducts = useSelector((state) => state.adminProducts);

  useEffect(() => {
    dispatch(getAllProductsAdmin());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {adminProducts &&
        adminProducts.map((el) => {
          return (
            <Card
              key={el.id}
              id={el.id}
              name={el.name}
              price={el.price}
              image={el.image}
              isactive={el.isactive}
            />
          );
        })}
    </>
  );
}
