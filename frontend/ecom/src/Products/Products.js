import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Productslist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <ol>
              <li>{product.name}</li>
              </ol>
            <p>Price: ${product.price}</p>
            <p>Description:{product.description}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Productslist ;