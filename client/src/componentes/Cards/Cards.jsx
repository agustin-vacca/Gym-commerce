import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";
import Card from "../Card/Card";
import { CardsDisplayer, Layout } from "./CardsStyle";
import OrderAndFilters from "../Filters/OrderAndFilters"

export default function Cards() {
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProducts());
      }, [dispatch]);


return (

  <Layout>
    <OrderAndFilters />
    <CardsDisplayer>
        {allProducts.map((el) => {
          return (
            <Card key={el.id} id={el.id} name={el.name} price={el.price} image={el.image}/>
          );
        })}
    </CardsDisplayer>


  </Layout>
)



}
