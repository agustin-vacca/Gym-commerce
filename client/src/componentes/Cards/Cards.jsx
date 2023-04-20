import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { Container, LoadingIMG } from "./CardsStyle";

export default function Cards() {

  const allProducts = useSelector((state) => state.products);
  // eslint-disable-next-line
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [productsPerPage, setProductsPerPage] = useState(6);
  const indexOfLastCountry = currentPage * productsPerPage;
  // eslint-disable-next-line
  const indexOfFirstCountry = indexOfLastCountry - productsPerPage;
  const currentProducts = allProducts.slice(0, currentPage * productsPerPage);

  const addPage = () => {
    setTimeout(() => {
      setCurrentPage(currentPage + 1);
    }, 500);
  };


  return (
    <div>
      <InfiniteScroll
        dataLength={currentProducts.length}
        next={() => addPage()}
        hasMore={true}
        loader={
          currentProducts.length >= allProducts.length ? (
            ""
          ) : (
            <LoadingIMG>
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </LoadingIMG>
          )
        }
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
          })}
        </Container>
      </InfiniteScroll>
    </div>
  );
}
