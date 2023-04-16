import React from "react";
import { useDispatch } from "react-redux";
import { FiltersStyled } from "./Order&FilterStyled.js";
import {
  orderByName,
  orderByPrice,
  filterProductsByCategories,
} from "../../redux/actions.js";

export default function OrderAndFilters({setOrden}) {
  const dispatch = useDispatch();

  function handleOrderByName(e) {
    dispatch(orderByName(e.target.value));
    setOrden(`Ordenado ${e.target.value}`);
  }
  function handleOrderByPrice(e) {
    dispatch(orderByPrice(e.target.value));
    setOrden(`Ordenado ${e.target.value}`);
  }
  function handleFilterCategories(event) {
    dispatch(filterProductsByCategories(event.target.value));
  }

  return (
    <FiltersStyled>
      <select onChange={(e) => handleOrderByName(e)}>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>

      <select onChange={(e) => handleOrderByPrice(e)}>
        <option>Order by Price</option>
        <option value="asc">Increase price</option>
        <option value="desc">Decrease price</option>
      </select>

      <select onChange={(e) => handleFilterCategories(e)}>
        <option value="All">All Categories</option>
        <option value="Mancuernas">Mancuernas</option>
        <option value="Maquinas">Maquinas</option>
        <option value="Accesorios">Accesorios</option>
        <option value="Rack">Rack</option>
        <option value="Discos y Barras">Discos y Barras</option>
      </select>

    </FiltersStyled>
  );
}
