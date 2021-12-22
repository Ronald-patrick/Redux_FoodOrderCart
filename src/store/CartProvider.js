import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
	items:[],
	totalAmount:0,
}

const cartReducer = (state, action)=> {
	if( action.type === "ADD_CART" ){
		const updatedTotal = state.totalAmount + action.item.price * action.item.amount;
		const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

		const exisitingCartItem = state.items[existingCartItemIndex];


		let updatedItems;

		if(exisitingCartItem){
			const updatedItem = {
				...exisitingCartItem,
				amount: exisitingCartItem.amount  + action.item.amount
			}
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		}
		else
		{
			updatedItems = state.items.concat(action.item);
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotal
		}
	}

	if(action.type === "REMOVE_CART"){
		const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
		const updatedTotal = state.totalAmount - state.items[existingCartItemIndex].price;
		let updatedItems = [...state.items];
		if(state.items[existingCartItemIndex].amount === 1)
		{
			updatedItems.splice(existingCartItemIndex,1);
			console.log(updatedItems);
		}
		else{
			updatedItems[existingCartItemIndex].amount -= 1 ;
		}
		return {
			items: updatedItems,
			totalAmount: +updatedTotal
		}
	}
	return defaultCartState;
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState);


	const addItemToCart = item =>{
		dispatchCartAction({
			type: 'ADD_CART',
			item: item
		})	
	};
	const removeItemFromCart = id =>{
		dispatchCartAction({
			type: 'REMOVE_CART',
			id:id
		})
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCart,
		removeItem: removeItemFromCart,
	}
	
	return <CartContext.Provider value={cartContext}>
		{props.children}
	</CartContext.Provider>
}

export default CartProvider
