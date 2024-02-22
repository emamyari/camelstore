import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import { Productlist } from './Components/Productlist/Productlist';
import { Navbar } from './Components/Navbar/Navbar';

function App() {

  return (
    <div>
      <Navbar/>
      <Productlist />
    </div>
    );
}

export default App;
