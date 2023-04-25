import React from "react";
import { useDispatch } from "react-redux";
import { orderByName, orderByPrice } from "../../redux/actions.js";
import { FiltersStyled } from "./Order&FilterStyled.js";

export default function OrderAndFilters({ setOrden }) {
  const dispatch = useDispatch();

  function handleOrderByName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setOrden(`Ordenado ${e.target.value}`);
  }
  function handleOrderByPrice(e) {
    e.preventDefault();
    dispatch(orderByPrice(e.target.value));
    setOrden(`Ordenado ${e.target.value}`);
  }

  //  function handleFilterCategories(event){
  //   dispatch(filterProductsByCategories(event.target.value))
  //  }

  return (
    <FiltersStyled>

    <h2>ORDENAR</h2>

    <input type="radio" name="Order" id="nameAsc" onClick={(e) => handleOrderByName(e)} value="alfAsc" ></input>
    <label for="nameAsc">A-Z</label>
    <input type="radio" name="Order" id="nameDesc" onClick={(e) => handleOrderByName(e)} value="alfDesc" ></input>
    <label for="nameDesc">Z-A</label>

    <input type="radio" name="Order" id="priceAsc" onClick={(e) => handleOrderByPrice(e)} value="priceAsc" ></input>
    <label for="priceAsc">Increase price</label>
    <input type="radio" name="Order" id="priceDesc" onClick={(e) => handleOrderByPrice(e)} value="priceDesc" ></input>
    <label for="priceDesc">Decrease price</label>
{/*       <select onChange={(e) => handleOrderByName(e)}>
        <option>Order by Name</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select> */}

{/*       <select onChange={(e) => handleOrderByPrice(e)}>
        <option>Order by Price</option>
        <option value="asc">Increase price</option>
        <option value="desc">Decrease price</option>
      </select> */}

      {/* <select onChange={e=> handleFilterCategories(e)}>

        <option value="All">All Categories</option>
        <option value="Mancuernas">Mancuernas</option>
        <option value="Maquinas">Maquinas</option>
        <option value="Accesorios">Accesorios</option>
        <option value="Rack">Rack</option>
        <option value="Discos y Barras">Discos y Barras</option>

      </select> */}
    </FiltersStyled>
  );
}
