/*import React from "react";
import { useState } from 'react';
import axios from "axios";
const Register=()=>{
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
      });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(
            "mongodb://localhost:27017/api/auth/register",
            formData
          );
          // Redirect to login page or perform other actions upon successful registration
        } catch (error) {
         
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
export default Register;*/