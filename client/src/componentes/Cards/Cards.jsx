import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";
import Card from "../Card/Card";
import { CardsDisplayer, Layout, Container } from "./CardsStyle";
import OrderAndFilters from "../Filters/OrderAndFilters";
import InfiniteScroll from "react-infinite-scroll-component";


export default function Cards() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  // eslint-disable-next-line
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);  
  // eslint-disable-next-line
  const [productsPerPage, setProductsPerPage] = useState(4);
  const indexOfLastCountry = currentPage * productsPerPage
  // eslint-disable-next-line
  const indexOfFirstCountry=  indexOfLastCountry - productsPerPage
  const currentProducts = allProducts.slice(0, (currentPage * productsPerPage))
  

const addPage = () =>{
  setTimeout(()=>{
    setCurrentPage(currentPage + 1)
  },500)
}


  useEffect(() => {
    dispatch(getProducts());
  }, []);



  return (
    <Layout>
      <OrderAndFilters setOrden={setOrden}/>
       <CardsDisplayer>
       <InfiniteScroll
      dataLength={currentProducts.length}
      next={() => addPage()}
      hasMore={true}
      loader={currentProducts.length <= allProducts.length ? "" : <h4>Loading...</h4>}
    >
      <Container>
      {currentProducts.map((el) => {
          return (
            <Card
              key={el.id}
              id={el.id}
              name={el.name}
              price={el.price}
              image={el.image}
            />
          );
        })        
        }
      </Container>
    </InfiniteScroll>
      </CardsDisplayer> 
    </Layout>

  );
}