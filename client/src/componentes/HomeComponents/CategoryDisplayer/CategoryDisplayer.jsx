import React, { useEffect } from "react";
import { Container } from "./CategoryDisplayerStyle";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../redux/actions";
import CategoryCard from "./CategoryCard.jsx";

export default function CategoryDisplayer() {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categories);
  console.log(allCategories);

  useEffect(() => {
    dispatch(getCategories());
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