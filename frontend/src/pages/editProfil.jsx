import { useNavigate } from "react-router-dom";
import posts from "../assets/posts.png";
import Button from "../components/ui/Button";

function EditProfile() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0B0B0F] text-white flex justify-center py-10">
            <div className="w-full max-w-3xl px-6">

                {/* Retour */}
                <button
                    onClick={() => navigate("/profil")}
                    className="mb-6 text-gray-400 hover:text-white transition"
                >
                    ← Retour au profil
                </button>

                {/* Carte principale */}
                <div className="rounded-3xl bg-[#18181F] border border-gray-800 shadow-xl overflow-hidden">

                    {/* Header */}
                    <div className="px-8 py-7 border-b border-gray-800">
                        <h1 className="text-3xl font-bold">
                            Modifier le profil
                        </h1>

                        <p className="mt-2 text-gray-400">
                            Modifie les informations visibles sur ton profil.
                        </p>
                    </div>

                    {/* Contenu */}
                    <div className="p-8 space-y-8">

                        {/* Photo */}
                        <div>
                            <h2 className="font-semibold mb-4">
                                Photo de profil
                            </h2>

                            <div className="flex items-center gap-5">
                                <img
                                    src={posts}
                                    alt="Photo de profil"
                                    className="h-24 w-24 rounded-full object-cover border-4 border-violet-500/30"
                                />

                                <div>
                                    <button
                                        className="rounded-xl border border-[#4C2D8A] bg-[#36235E] px-4 py-2 text-sm font-medium hover:bg-[#4A2F80] transition"
                                    >
                                        Modifier la photo
                                    </button>

                                    <p className="text-xs text-gray-500 mt-2">
                                        JPG, PNG. 5 MB maximum.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Nom */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Nom
                            </label>

                            <input
                                type="text"
                                defaultValue="sabrine"
                                className="w-full h-12 rounded-xl border border-gray-800 bg-[#0F0F14] px-4 text-white outline-none focus:border-violet-500 transition"
                            />
                        </div>

                        {/* Username */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Nom d'utilisateur
                            </label>

                            <div className="flex">
                                <span className="flex items-center px-4 bg-[#101017] border border-r-0 border-gray-800 rounded-l-xl text-gray-500">
                                    @
                                </span>

                                <input
                                    type="text"
                                    defaultValue="sabrine"
                                    className="w-full h-12 rounded-r-xl border border-gray-800 bg-[#0F0F14] px-4 text-white outline-none focus:border-violet-500 transition"
                                />
                            </div>
                        </div>

                        {/* Bio */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Bio
                            </label>

                            <textarea
                                rows="4"
                                defaultValue="Photographe & designer UI ✨ Paris : je capture la beauté du quotidien"
                                className="w-full rounded-xl border border-gray-800 bg-[#0F0F14] px-4 py-3 text-white outline-none resize-none focus:border-violet-500 transition"
                            />
                        </div>

                        {/* Séparateur */}
                        <div className="border-t border-gray-800" />

                        {/* Boutons */}
                        <div className="flex justify-end gap-3">

                            <button
                                onClick={() => navigate("/profil")}
                                className="h-11 px-6 rounded-xl border border-gray-700 text-gray-300 hover:bg-[#22222A] transition"
                            >
                                Annuler
                            </button>

                            <Button
                                text="Enregistrer"
                                color="bg-[#36235E] hover:bg-[#4A2F80]"
                                className="h-11 px-7 rounded-xl font-semibold"
                            />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;