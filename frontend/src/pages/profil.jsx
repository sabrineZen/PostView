import Post from "../components/post"; 
import posts from "../assets/posts.png"
import Button from "../components/ui/Button";
import Home from "./home";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {getUserNameById} from "../services/api"
function Profil() {
  const navigate=useNavigate();
  const HomeNavigate=()=>navigate("/home")
  const [userName, setUserName] = useState("");
  //recuperation du nom utilisateur
  const getuserName = async () => {
        try {
            const storedUser = localStorage.getItem("user");

            if (storedUser) {
                const parsedUser = JSON.parse(storedUser);
                const userId = parsedUser?.id;

                const data = await getUserNameById(userId);
                

                setUserName(data.userName);

            }
        } catch (error) {
            console.error(
                "Erreur lors de la récupération du nom d'utilisateur :",
                error
            );
        }
    };

    useEffect(() => {
        getuserName();
    }, []);
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
                    <h1 className="text-3xl font-bold text-white">{userName}</h1>
                    <p className="text-violet-300 flex self-start">@{userName}</p>
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
                     {/*afficher les vu */}
                    <p className="mt-4 flex items-center gap-2 text-sm text-gray-400 ">
                    <span className="font-semibold text-white ">2 354</span> vues du profil ce mois
                    </p>
                </div>
            </div>

           
            {/* Liste des posts */}
            <div className="mt-8 space-y-6">
                <Post isProfile ispartager iscommentaire/>
                <Post isProfile ispartager iscommentaire/>
                <Post isProfile ispartager iscommentaire />
            </div>

      </div>
    </div>
  );
}

export default Profil;