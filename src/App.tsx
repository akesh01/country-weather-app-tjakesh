import React from 'react';
import { useState } from 'react';
import {Routes,Route, Link, Router} from "react-router-dom";
import './App.css'; 
import InputForm from './pages/InputForm';
import CountryDetails from './pages/CountryDetails';

function App() {
  return (
    <div>
  
      <Link className='header' to="/">Country Weather App</Link>  
      <div className="appPages">
        <Routes>
        <Route path="/" element={<InputForm/>}/>
          <Route path="/CountryDetails" element={<CountryDetails/>}/>
        </Routes>
     </div>
     </div>
   
  );
}

export default App;
