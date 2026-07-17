import Post from "../components/post"; 
import posts from "../assets/posts.png"
import Button from "../components/ui/Button";
import Home from "./home";
import { useNavigate } from "react-router-dom";
function Profil() {
  const navigate=useNavigate();
  const HomeNavigate=()=>navigate("/home")
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white flex justify-center py-10">
      <div className="w-full max-w-4xl px-6">
            {/*retour vers home */}
             <button 
                className="flex  gap-2 cursor-pointer self-start "
                onClick={() => navigate("/home")}
            >
                ← Retour
             </button>

                    {/* Bannière */}
            <div className="flex items-center justify-between h-56 rounded-3xl bg-[#18181F] px-10 shadow-lg mt-2">

                {/* Partie gauche */}
                <div className="flex items-center gap-6">
                    <div className="rounded-full border-4 border-violet-500/40 p-1">
                    <img
                        src={posts}
                        alt="profil"
                        className="h-24 w-24 rounded-full object-cover"
                    />
                    </div>

                    <div>
                    <h1 className="text-3xl font-bold text-white">sabrine</h1>
                    <p className="text-violet-300 flex self-start">@sabrine</p>
                    </div>
                </div>

                {/* Bouton */}
                <Button
                    className="h-11 w-48 rounded-full  border border-[#472E7C] font-semibold"
                    text="Modifier le profil"
                    color="hover:bg-[#312152]"
                />

            </div>

            {/* Informations */}
            <div className="mt-16 ">
                <h1 className="text-4xl font-bold flex self-start">sabrine</h1>

                <p className="mt-1 text-violet-400 flex self-start">@sabrine</p>

                <p className="mt-5 text-gray-300 flex self-start">
                    Photographe & designer UI ✨ Paris : je capture la beauté du quotidien
                </p>

                <div className="mt-6 flex gap-8">
                    <p>
                    <span className="font-bold text-white">12.4k</span>{" "}
                    <span className="text-gray-400">abonnés</span>
                    </p>

                    <p>
                    <span className="font-bold text-white">390</span>{" "}
                    <span className="text-gray-400">abonnements</span>
                    </p>

                    <p>
                    <span className="font-bold text-white">247</span>{" "}
                    <span className="text-gray-400">posts</span>
                    </p>
                </div>
            </div>

           
            {/* Liste des posts */}
            <div className="mt-8 space-y-6">
                <Post isProfile ispartager/>
                <Post isProfile ispartager/>
                <Post isProfile ispartager />
            </div>

      </div>
    </div>
  );
}

export default Profil;