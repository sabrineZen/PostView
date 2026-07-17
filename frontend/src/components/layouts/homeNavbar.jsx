import {
  HiHome,
  HiSearch,
  HiBell,
  HiUser,
  HiLogout,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
function HomeNavbar() {
  return (
    <nav className="fixed   flex h-screen w-90 flex-col justify-between  p-8 text-white">

      {/* Haut */}
      <div className="flex flex-col gap-12 w-80 ">

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
          <li className="flex cursor-pointer items-center gap-4 rounded-xl p-4 transition hover:bg-[#1A1A22] hover:text-violet-500">
            <HiSearch className="text-2xl" />
            <span>Recherche</span>
          </li>

          <li className="flex cursor-pointer items-center gap-4 rounded-xl p-4 transition hover:bg-[#1A1A22] hover:text-violet-500">
            <HiBell className="text-2xl" />
            <span>Notifications</span>
          </li>

          <li className="flex cursor-pointer items-center gap-4 rounded-xl p-4 transition hover:bg-[#1A1A22] hover:text-violet-500">
            <HiUser className="text-2xl" />
            <span>Mon profil</span>
          </li>

        </ul>

      </div>

      {/* Bas */}
      <button className="flex cursor-pointer items-center gap-4 rounded-xl p-4 transition hover:bg-[#1A1A22] ">
        <HiLogout className="text-2xl" />
        <span>Déconnexion</span>
      </button>

    </nav>
  );
}

export default HomeNavbar;