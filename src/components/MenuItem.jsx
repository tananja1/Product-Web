import React from 'react';
import { useCart } from '../context/CartContext';


function MenuItem({ image, name, price }) {
  const { dispatch } = useCart();
  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: {image, name, price, id: Date.now()} });  };
  return (
    <div className='menuItem'>
      <div style={{ backgroundImage: `url(${image})`}}></div>
      <h1>{name}</h1>
      <p>${price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default MenuItem;
