import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cart, setCart] = useState(null);
  
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cart', {
          // Assuming you have authentication token stored in localStorage
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setCart(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchCart();
  }, []);
  
  if (!cart) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Cart</h1>
      {cart.items.map(item => (
        <div key={item._id}>
          <h2>{item.product.name}</h2>
          <p>Quantity: {item.quantity}</p>
          <p>Price: {item.product.price}</p>
          {/* Add more details you want to display */}
        </div>
      ))}
      <h2>Total: {cart.total}</h2>
    </div>
  );
};

export default Cart;
