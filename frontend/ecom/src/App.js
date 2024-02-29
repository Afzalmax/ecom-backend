import Register from "./Register1";
import './App.css';
import Login from './Login';
import Reset from './ResetPassword';
import Cart from './AddToCart'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
   <>
   <Router>
   <Routes>
   <Route path="/register" element={<Register />} />
   <Route path="/login" element={<Login/>}/>
   <Route path="/reset" element={<Reset/>}/>
   <Route path="/cart" element={<Cart/>}/>
   </Routes>
   </Router>
   </>
  );
}

export default App;
