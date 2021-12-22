import React,{useRef,useState} from "react";
import classes from "./MealItem.module.css";

const MealItemForm = (props) => {
	const [isValid, setisValid] = useState(true);
	const ref = useRef();

	const sumbitHandler = (e)=>{
		e.preventDefault();

		const enteredAmount = +ref.current.value;

		if(enteredAmount < 1 || enteredAmount > 5)
		{
			setisValid(false);
			return;
		}
		
		props.onAddToCart(enteredAmount);

	}

  return (
    <form className={classes.form} onSubmit={sumbitHandler}>
      <div className={classes.input} >
		  <label htmlFor={props.id}>Amount</label>
		  <input ref={ref} type="number" id={props.id} min='1' max="10" step="1" defaultValue="1"  />
	  </div>
      <button>+ Add</button>
	  {!isValid && <p>Invalid Input</p>}
    </form>
  );
};

export default MealItemForm;
