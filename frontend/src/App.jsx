import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './App.css'
import Landing from './pages/landing.jsx'
import Login from  './pages/login.jsx'
import Register from './pages/register.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>

        
      </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
