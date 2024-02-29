import React, { useState } from 'react';
import axios from 'axios';

const AddToCartForm = () => {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to addToCart endpoint
      const response = await axios.post('http://localhost:5000/api/cart/add', {
        productId,
        quantity
      });
      console.log('Cart:', response.data);
      // Optionally, you can show a success message or update the UI in some way
    } catch (error) {
      console.error('Error adding to cart:', error);
      // Optionally, you can show an error message or handle the error in some way
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product ID:
        <input
          type="text"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
      </label>
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </label>
      <button type="submit">Add to Cart</button>
    </form>
  );
};

export default AddToCartForm;
