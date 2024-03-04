// UserCartContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the context
const UserCartContext = createContext();

// Provider component
export const UserCartProvider = ({ children }) => {
  // State for user and cart
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(null);

  // Function to set user data
  const loginUser = (userData) => {
    console.log(userData);
    setUser(userData);
  };

  return (
    <UserCartContext.Provider value={{ user, setUser, cart, setCart, loginUser }}>
      {children}
    </UserCartContext.Provider>
  );
};

// Custom hook to use the context
export const useUserCart = () => useContext(UserCartContext);
