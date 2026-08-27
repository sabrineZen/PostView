import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Landing from "./pages/landing.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Home from "./pages/home.jsx";
import Profil from "./pages/profil.jsx";
import Search from "./pages/search.jsx";
import Notification from "./pages/notification.jsx";
import EditProfil from "./pages/editProfil.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/profil/:id" element={<Profil />} />
        <Route path="/search" element={<Search />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/editProfil" element={<EditProfil />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;