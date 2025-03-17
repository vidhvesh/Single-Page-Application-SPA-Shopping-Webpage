import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const handleQuantityChange = (e) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { ...item, quantity: parseInt(e.target.value) } });
  };

  return (
    <div className="cart-item">
      <h3>{item.title}</h3>
      <p>${item.price}</p>
      <input
        type="number"
        value={item.quantity}
        min="1"
        onChange={handleQuantityChange}
      />
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;