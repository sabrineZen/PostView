import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './App.css'
import Landing from './pages/landing.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        
      </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
