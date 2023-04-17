import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";
import Card from "../Card/Card";
import {
  CardsDisplayer,
  Layout,
  Container,
  LoadingIMG,
  SliderContainer,
} from "./CardsStyle";
import OrderAndFilters from "../Filters/OrderAndFilters";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageSlider from "../ImageSlider/ImageSlider";

export default function Cards() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  // eslint-disable-next-line
  const [orden, setOrden] = useState("");
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

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
  ];

  return (
    <Layout>
      <OrderAndFilters setOrden={setOrden} />
      <div>
        <SliderContainer>
          <ImageSlider slides={slides} />
        </SliderContainer>

      <CardsDisplayer>
        <InfiniteScroll
          dataLength={currentProducts.length}
          next={() => addPage()}
          hasMore={true}
          loader={
            currentProducts.length >= allProducts.length ? (
              ""
            ) : (
              <LoadingIMG>
                <div class="lds-ring">
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
      </CardsDisplayer>
      </div>
    </Layout>
  );
}
