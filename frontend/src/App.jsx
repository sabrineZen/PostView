import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './App.css'
import Landing from './pages/landing.jsx'
import Login from  './pages/login.jsx'
import Register from './pages/register.jsx';
import Home from './pages/home.jsx';
import Profil from './pages/profil.jsx';
import Search from './pages/search.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/profil" element={<Profil/>}/>
        <Route path="/search" element={<Search/>}/>

        

        
      </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
