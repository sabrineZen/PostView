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
import ProtectedRoute from "./components/ProtectedRoute.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}  />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/profil" element={
          <ProtectedRoute>
            <Profil />
          </ProtectedRoute>
        } />
        <Route path="/profil/:id" element={
          <ProtectedRoute>
            <Profil />
          </ProtectedRoute>
        } />
        <Route path="/search" element={
          <ProtectedRoute>
            <Search />
          </ProtectedRoute>
        } />
        <Route path="/notification" element={
          <ProtectedRoute>
            <Notification />
          </ProtectedRoute>
        } />
        <Route path="/editProfil" element={
          <ProtectedRoute>
            <EditProfil />
          </ProtectedRoute>
        } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;