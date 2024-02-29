import React from 'react'
import { useState } from 'react';
import axios from "axios";
const Addproducts = () => {
    const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    imageurl: "",
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
    <form  method="POST">
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
       <label>Category:</label>
       <input type="text"
            name="category" 
            id="category" 
            value={formData.category}
            onChange={handleChange}/>
       <label>Image URL:</label>
       <input type="text"
            name="imageurl" 
            id="imageurl" 
            value={formData.imageurl}
            onChange={handleChange}/>  
            <br></br>
       <label>StockQuantity:</label>
       <input type="text"
            name="stockQuantity" 
            id="stockQuantity" 
            value={formData.stockQuantity}
            onChange={handleChange}/>
        <button onSubmit={handleSubmit}>ADD PRODUCT</button>
    </form>
    </>
        
    
  )
}

export default Addproducts;