import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";
import Card from "../Card/Card";
import { CardsDisplayer } from "./CardsStyle";



export default function Cards() {
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProducts());
      }, [dispatch]);


return (
    <CardsDisplayer>
        {allProducts.map((el) => {
          return (
            <Card key={el.id} id={el.id} name={el.name} price={el.price} image={el.image}/>
          );
        })}
  </CardsDisplayer>
)



}
