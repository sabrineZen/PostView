import {
  HiSearch,
  HiArrowLeft,
  HiTrendingUp,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import HomeNavbar from "../components/layouts/homeNavbar";
import RightSideBar from "../components/layouts/rightSideBar";

function Search() {
  const navigate = useNavigate();

  const tendances = [
    "#MotionDesign",
    "#BunJS",
    "#PhotographieNuit",
    "#AIDesign",
    "#OpenSource",
    "#DarkUI",
    "#ReactJS",
    "#CreativeCode",
  ];

  return (
      <div className="mx-auto flex max-w-[1500px]">

        {/* Contenu */}
        <main className="flex-1 px-8 py-6">

          {/* Barre de recherche */}
          <div className="flex items-center gap-5">

            <button
              onClick={() => navigate("/home")}
              className="rounded-full p-2 text-gray-400 transition hover:bg-[#1A1A22] hover:text-white"
            >
              <HiArrowLeft className="text-2xl" />
            </button>

            <div className="flex flex-1 items-center rounded-2xl border border-[#2C2C36] bg-[#18181F] px-4 py-3">
              <HiSearch className="text-xl text-gray-500" />

              <input
                type="text"
                placeholder="Rechercher posts, personnes..."
                className="ml-3 w-full bg-transparent outline-none placeholder:text-gray-500"
              />
            </div>

          </div>

          {/* Tendances */}
          <div className="mt-12">

            <div className="mb-6 flex items-center gap-2">
              <HiTrendingUp className="text-violet-500" />
              <h2 className="text-3xl font-bold">Tendances</h2>
            </div>

            <div className="flex flex-wrap gap-4">
              {tendances.map((tag) => (
                <button
                  key={tag}
                  className="rounded-2xl border border-violet-800 bg-violet-900/30 px-5 py-3 text-violet-300 transition hover:bg-violet-700 hover:text-white"
                >
                  {tag}
                </button>
              ))}
            </div>

          </div>

        </main>

       

      </div>
  );
}

export default Search;