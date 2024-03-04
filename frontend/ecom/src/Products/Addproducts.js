import React from 'react'
import { useState } from 'react';
import axios from "axios";
const Addproducts = () => {
    const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    size:"",
    category: "",
    image: "",
    stockQuantity: "",
  });
const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/products/addproduct",
        formData
      );
      console.log(response.data);
    } catch (error) {
     console.log(error);
    }
  };
  return(
    <>
    <form onSubmit={handleSubmit} method="POST">
       <label>Name:</label>
       <input type="text"
            name="name" 
            id="name" 
            value={formData.name}
            onChange={handleChange}/>
        <label>Description:</label>
       <input type="text"
            name="description" 
            id="description" 
            value={formData.description}
            onChange={handleChange}/>
       <label>Price:</label>
       <input type="text"
            name="price" 
            id="price" 
            value={formData.price}
            onChange={handleChange}/>
       <label>Size:</label>
       <input type="text"
            name="size" 
            id="size" 
            value={formData.size}
            onChange={handleChange}/>
       <label>Category:</label>
       <input type="text"
            name="category" 
            id="category" 
            value={formData.category}
            onChange={handleChange}/>
       <label>Image URL:</label>
       <input type="text"
            name="image" 
            id="image" 
            value={formData.image}
            onChange={handleChange}/>  
            <br></br>
       <label>StockQuantity:</label>
       <input type="text"
            name="stockQuantity" 
            id="stockQuantity" 
            value={formData.stockQuantity}
            onChange={handleChange}/>
        <button >ADD PRODUCT</button>
    </form>
    </>
        
    
  )
}

export default Addproducts;