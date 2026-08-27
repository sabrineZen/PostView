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
      <nav className="relative z-50 flex h-20 w-full items-center justify-between px-4 sm:px-6 md:px-10">

        {/* Logo */}
        <div className="ml-0 flex items-center gap-2 sm:ml-4 md:ml-16">
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
          type="button"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="relative z-50 flex flex-col gap-4 bg-[#0B0B0F] px-6 py-6 md:hidden">
          <Button className="rounded-xl"
            text="Connexion"
            color="bg-[#0B0B0F]"
            onClick={() => {
              setIsOpen(false);
              loginNavigate();
            }}
          />

          <Button className="rounded-xl"
            text="S'inscrire"
            color="bg-violet-500"
            onClick={() => {
              setIsOpen(false);
              registerNavigate();
            }}
          />
        </div>
      )}
    </>
  );
}

export default LandingNavbar;