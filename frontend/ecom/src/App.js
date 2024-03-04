import Register from "./userauth/Register1";
import './App.css';
import Login from './userauth/Login';
import Reset from './ResetPassword';
import Cart from './AddToCart';
import ADDproducts from './Products/Addproducts';
import Productslist from './Products/Products';
import ProductsDisplay from './Products/ProductDisplay';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { UserCartProvider } from './UserCartContext';

function App() {
  return (
   <>
   <UserCartProvider> 
   <Router>
   <Routes>
   <Route path="/register" element={<Register />} />
   <Route path="/login" element={<Login/>}/>
   <Route path="/reset" element={<Reset/>}/>
   <Route path="/cart" element={<Cart/>}/>
   <Route path="/addproducts" element={<ADDproducts/>}/>
   <Route path="/productslist" element={<Productslist/>}/>
   <Route path="/products" element={<ProductsDisplay/>}/>
   </Routes>
   </Router>
   </UserCartProvider>
   </>
  );
}

export default App;
