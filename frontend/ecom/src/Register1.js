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
  /* <label htmlFor="username">UserName:</label>
        <input type="text"
         id="username" 
         name="username" 
         required=""
         value={formData.username}
         onChange={handleChange}
         />*/
         
return(
          <>
          <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Regsiter
                        </h1>
                        <form onSubmit={handleSubmit} method="POST" className="space-y-4 md:space-y-6" action="#">
                               <div>
                                <label for="username" 
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username:</label>
                                <input type="text"
                                name="username" 
                                id="username" 
                                value={formData.username}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type your name" required=""/>
                            </div>
                            <div>
                                <label for="email" 
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email"
                                name="email" 
                                id="email" 
                                value={formData.email}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label for="password" 
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password"
                                 name="password" 
                                 id="password" 
                                 placeholder="••••••••" 
                                 value={formData.password}
                                 onChange={handleChange}
                                 className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
          </section>
          </>
          )
          }
export default Register1
