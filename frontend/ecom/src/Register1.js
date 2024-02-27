import React from 'react'
import { useState } from 'react';
import axios from "axios";
const Register1 = () => {
    const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
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
        <label htmlFor="username">UserName:</label>
        <input type="text"
         id="name" 
         name="name" 
         required=""
         value={formData.username}
         onChange={handleChange}
         />
         <label htmlFor="email">Email:</label>
        <input type="text"
         id="email" 
         name="email" 
         required=""
         value={formData.email}
         onChange={handleChange}
         />
         <label htmlFor="password">Password:</label>
        <input type="text"
         id="password" 
         name="password" 
         required=""
         value={formData.password}
         onChange={handleChange}
         />
         <button type="submit">
            Submit
         </button>
    </form>
    </>
)
}

export default Register1
