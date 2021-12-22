import React from 'react'
import mealsImage from "./meals.jpg"
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
	return (
		<>
		<header className={classes.header}>
			<h1>GeekMeals</h1>
			<HeaderCartButton functions = {props}/>
		</header>

		<div className={classes['main-image']}>
			<img src={mealsImage} alt="Meals" />
		</div>
		</>
	)
}

export default Header
