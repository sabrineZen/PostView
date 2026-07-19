import { useState } from "react";
import {
  HiHeart,
  HiChat,
  HiShare,
  HiDotsHorizontal,
} from "react-icons/hi";

function Post({ isProfile = false, ispartager = false ,iscommentaire=false}) {
  const [showComments, setShowComments] = useState(false);

  return (
    <article className="w-full rounded-2xl border border-gray-800 bg-[#18181F] p-5 shadow-lg">

      {/* Header */}
      {!isProfile && (
        <div className="flex items-start justify-between">

          <div className="flex items-center gap-3">

            <div className="h-12 w-12 rounded-full bg-violet-500"></div>

            <div>
              <h3 className="font-semibold text-white">John Doe</h3>
              <p className="text-sm text-gray-400">
                @johndoe • Il y a 2 h
              </p>
            </div>

          </div>

          <button className="text-gray-400 transition hover:text-white">
            <HiDotsHorizontal className="text-2xl" />
          </button>

        </div>
      )}

      {/* Contenu */}
      <div className={isProfile ? "" : "mt-5"}>
        <p className="leading-7 text-gray-200">
          Aujourd'hui j'ai terminé l'interface de PostView 🚀.
          Petit à petit le projet prend forme, bientôt le backend !
        </p>
      </div>

      {/* Image */}
      <div className="mt-5 flex h-80 items-center justify-center rounded-xl bg-[#2A2A33]">
        <span className="text-gray-500">
          Image du post
        </span>
      </div>

      {/* Actions */}
      <div className="mt-5 flex items-center justify-between border-t border-[#2A2A33] pt-4">

        {/* Like */}
        <button className="flex items-center gap-2 text-gray-400 transition hover:text-red-500">
          <HiHeart className="text-2xl" />
          <span>128</span>
        </button>

        {/* Commentaires */}
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-2 text-gray-400 transition hover:text-violet-500"
        >
          <HiChat className="text-2xl" />
          <span>34</span>
        </button>

        {/* Partager */}
        {!ispartager && (
          <button className="flex items-center gap-2 text-gray-400 transition hover:text-green-500">
            <HiShare className="text-2xl" />
            <span>Partager</span>
          </button>
        )}

      </div>

      {/* Commentaires */}
      {showComments && (
        <div className="mt-5 border-t border-[#2A2A33] pt-5">

          {/* Ajouter un commentaire */}
          {!iscommentaire &&(

          <input
            type="text"
            placeholder="Écrire un commentaire..."
            className="w-full rounded-xl bg-[#2A2A33] p-3 text-white outline-none placeholder:text-gray-500"
          />
          )}

          {/* Liste des commentaires */}
          <div className="mt-6 space-y-5">

            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-full bg-violet-500"></div>

              <div>
                <h4 className="font-semibold">Alice</h4>
                <p className="text-gray-400">
                  Super projet ! Continue comme ça 🚀
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-full bg-violet-500"></div>

              <div>
                <h4 className="font-semibold">Thomas</h4>
                <p className="text-gray-400">
                  Le design est vraiment propre.
                </p>
              </div>
            </div>

          </div>

        </div>
      )}

    </article>
  );
}

export default Post;