import React, { useEffect } from "react";
import { Container } from "./CategoryDisplayerStyle";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getProducts } from "../../../redux/actions";
import CategoryCard from "./CategoryCard.jsx";

export default function CategoryDisplayer() {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
    // eslint-disable-next-line
  }, []);

  
  return (
    <Container>
       {allCategories.map((el) => {
            return (
              <CategoryCard
                key={el.id}
                id={el.id}
                name={el.name}
                description={el.description}
                image={el.productos[0].image}
              />
            );
          })} 

    </Container>
  );
};