import React from "react";
import { FiltersStyled } from "./Order&FilterStyled.js";

export default function OrderAndFilters() {
  return (
    <FiltersStyled>
  <div>
      <div className="ordenAlf">
        <input checked type="radio" name="status" value="desc" />
        <label for="alfOrder">A-Z</label>
        <input type="radio" name="status" value="asc" />
        <label for="alfOrder">Z-A</label>
      </div>

      <div className="ordenPrice">
        <input checked type="radio" name="status" value="desc" />
        <label for="PriceOrder">Price Asc</label>
        <input type="radio" name="status" value="asc" />
        <label for="PriceOrder">Price Desc</label>
      </div>
</div>

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
