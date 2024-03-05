
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <>
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      
    <Route path='/a' element={<Home />} />
    <Route path='/b' element={<Dashboard/>}/>
    <Route path='/c' element={<Login/>}/>
    <Route path='/t' element={<Signup/>}/>
  
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
