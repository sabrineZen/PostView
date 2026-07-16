import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import logo from "../../assets/logo.svg";
import Button from "../ui/Button.jsx";
import {useNavigate} from "react-router-dom";


function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const loginNavigate=()=>navigate("/login")
  const registerNavigate=()=>navigate("/register")

  return (
    <>
      <nav className="w-full h-20 flex items-center justify-between px-6 md:px-10 relative z-50">

        {/* Logo */}
        <div className="flex items-center gap-2 ml-16">
          <img
            src={logo}
            alt="PostView Logo"
            className="h-12 md:h-14 w-auto"
          />

          <h1 className="font-bold text-3xl md:text-4xl ">
            <span className=" font-outfit text-white ">Post</span>
            <span className=" font-outfit text-violet-500">View</span>
          </h1>
        </div>

        {/* Boutons Desktop */}
        <div className="hidden md:flex items-center gap-4 mr-16 font-outfit">
          <Button className="rounded-xl"
            text="Connexion "
            color="bg-[#0B0B0F]"
            onClick= {loginNavigate}
          />

          <Button className="rounded-xl"
            text="S'inscrire"
            color="bg-violet-500"
            onClick= {registerNavigate}
          />
        </div>

        {/* Hamburger Mobile */}
        <button
          className="md:hidden text-white text-3xl "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 py-6 flex flex-col gap-4">
          <Button className="rounded-xl"
            text="Connexion"
            color="bg-[#0B0B0F]"
            onClick={() => {}}
          />

          <Button className="rounded-xl"
            text="S'inscrire"
            color="bg-violet-500"
            onClick={() => {}}
          />
        </div>
      )}
    </>
  );
}

export default LandingNavbar;