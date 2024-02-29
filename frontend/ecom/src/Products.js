import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
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
            <p>{product.name}</p>
            <p>Price: ${product.price}</p>
            {/* You can add more details like description, images, etc. */}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details when the component mounts
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${match.params.productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [match.params.productId]);

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          {/* Display other product details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export { ProductList, ProductDetails };