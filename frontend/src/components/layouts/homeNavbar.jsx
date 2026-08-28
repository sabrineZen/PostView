import {
  HiHome,
  HiSearch,
  HiBell,
  HiUser,
  HiLogout,
  HiMenu,
  HiX,
} from "react-icons/hi";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Search from "../../pages/search";
function HomeNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("user");
    setMenuOpen(false);
    window.location.href = "/login";
  };

  return (
    <>
      <div className="flex w-full items-center justify-between border-b border-[#2A2A33] px-4 py-4 lg:hidden">
        <NavLink to="/home" className="flex items-center gap-2">
          <img src={logo} alt="PostView Logo" className="h-9 w-auto" />
          <h1 className="text-2xl font-bold">
            <span className="text-white">Post</span>
            <span className="text-violet-500">View</span>
          </h1>
        </NavLink>

        <button
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-lg p-2 text-2xl text-white hover:bg-[#1A1A22]"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-b border-[#2A2A33] px-4 pb-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            <li><NavLink onClick={() => setMenuOpen(false)} to="/home" className="flex items-center gap-3 rounded-xl p-3 hover:bg-[#1A1A22]"><HiHome className="text-xl" />Accueil</NavLink></li>
            <li><NavLink onClick={() => setMenuOpen(false)} to="/search" className="flex items-center gap-3 rounded-xl p-3 hover:bg-[#1A1A22]"><HiSearch className="text-xl" />Recherche</NavLink></li>
            <li><NavLink onClick={() => setMenuOpen(false)} to="/notification" className="flex items-center gap-3 rounded-xl p-3 hover:bg-[#1A1A22]"><HiBell className="text-xl" />Notifications</NavLink></li>
            <li><NavLink onClick={() => setMenuOpen(false)} to="/profil" className="flex items-center gap-3 rounded-xl p-3 hover:bg-[#1A1A22]"><HiUser className="text-xl" />Mon profil</NavLink></li>
            <li><button type="button" onClick={handleLogout} className="flex w-full items-center gap-3 rounded-xl p-3 text-left hover:bg-[#1A1A22]"><HiLogout className="text-xl" />Déconnexion</button></li>
          </ul>
        </nav>
      )}

      <nav className="hidden w-full flex-col justify-between p-5 text-white lg:flex xl:p-8">

      {/* Haut */}
      <div className="flex w-full flex-col gap-12">

        {/* Logo */}
           <div className="flex items-center gap-2 ">
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

        {/* Navigation */}
        <ul className="flex flex-col gap-3">

         <li>
            <NavLink
                to="/home"
                className={({ isActive }) =>
                `flex items-center gap-4 rounded-xl p-4 transition ${
                    isActive
                    ? "text-violet-500 bg-[#1A1A22]"
                    : "text-white hover:bg-[#1A1A22]"
                }`
                }
            >
                <HiHome className="text-2xl" />
                <span>Accueil</span>
            </NavLink>
            </li>
            {/*recherche */}
          <li>
                <NavLink
                    to="/search"
                    className={({ isActive }) =>
                    `flex items-center gap-4 rounded-xl p-4 transition ${
                        isActive
                        ? "text-violet-500 bg-[#1A1A22]"
                        : "text-white hover:bg-[#1A1A22] hover:text-violet-500"
                    }`
                    }
                >
                    <HiSearch className="text-2xl" />
                    <span>recherche</span>
                </NavLink>
            </li>

          <li>
                <NavLink
                    to="/notification"
                    className={({ isActive }) =>
                    `flex items-center gap-4 rounded-xl p-4 transition ${
                        isActive
                        ? "text-violet-500 bg-[#1A1A22]"
                        : "text-white hover:bg-[#1A1A22] hover:text-violet-500"
                    }`
                    }
                >
                    <HiBell className="text-2xl" />
                    <span>notifications</span>
                </NavLink>
            </li>
                {/*profil */}
           <li>
                <NavLink
                    to="/profil"
                    className={({ isActive }) =>
                    `flex items-center gap-4 rounded-xl p-4 transition ${
                        isActive
                        ? "text-violet-500 bg-[#1A1A22]"
                        : "text-white hover:bg-[#1A1A22] hover:text-violet-500"
                    }`
                    }
                >
                    <HiUser className="text-2xl" />
                    <span>Mon profil</span>
                </NavLink>
            </li>

        </ul>

      </div>

      {/* Bas */}
      <button type="button" onClick={handleLogout} className="flex cursor-pointer items-center gap-4 rounded-xl p-4 transition hover:bg-[#1A1A22] ">
        <HiLogout className="text-2xl" />
        <span>Déconnexion</span>
      </button>

      </nav>
    </>
  );
}

export default HomeNavbar;