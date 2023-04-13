import React from "react";
import { FiltersStyled } from "./Order&FilterStyled.js";

export default function OrderAndFilters(){   
  return (
    <FiltersStyled>
        <select>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>

        <select>
          <option>Order by Price</option>
          <option value="asc">Increase price</option>
          <option value="desc">Decrease price</option>
        </select>

        <select>
          <option value="All">All Categories</option>
          <option value="Mancuernas">Mancuernas</option>
          <option value="Maquinas">Maquinas</option>
          <option value="Accesorios">Accesorios</option>
        </select>
    </FiltersStyled>
  );
}
