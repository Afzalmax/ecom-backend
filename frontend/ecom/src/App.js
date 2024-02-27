import Register from "./Register1";
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
   <>
   <Router>
   <Routes>
   <Route path="/register" element={<Register />} />
   </Routes>
   </Router>
   </>
  );
}

export default App;
