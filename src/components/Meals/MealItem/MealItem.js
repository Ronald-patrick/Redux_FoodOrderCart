import React from "react";
import { useContext } from "react/cjs/react.development";
import CartContext from "../../../store/cart-context";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
	const ctx = useContext(CartContext);
  const addToCart = amount =>{
	ctx.addItem({
		id: props.id,
		name:props.name,
		amount: amount,
		price:props.price
	})
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCart} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
