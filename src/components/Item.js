import React, { useState } from "react";


function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)
  const cartStatus = inCart ? "in-cart" : ""
  const cartButton = inCart? "add" : "remove"
  const addCart = inCart? "Remove from Cart" : "Add to Cart"
  
  function addFood() {
    const newCartArray = []
    setInCart(newCartArray)
  }

  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addFood}  className={cartButton}>{addCart}</button>
    </li>
  );
}

export default Item;
