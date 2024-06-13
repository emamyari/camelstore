import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import { Productlist } from './Components/Productlist/Productlist';
import { Shop } from './Components/Shop/Shop';
import { Navbar } from './Components/Navbar/Navbar';
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/men" element={<Productlist category={8}/>} />
        <Route path="/women" element={<Productlist category={4}/>} />
        <Route path="/kid" element={<Productlist category={1}/>} />

        </Routes>

      </BrowserRouter>
    </div>
    );
}

export default App;
