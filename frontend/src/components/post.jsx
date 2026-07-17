import {
  HiHeart,
  HiChat,
  HiShare,
  HiDotsHorizontal,
} from "react-icons/hi";

function Post({ isProfile = false ,ispartager=false}) {
  return (
    <article className="w-full rounded-2xl bg-[#18181F] p-5 shadow-lg border border-gray-800">

      {/* Header */}
      {!isProfile && (
        <div className="flex items-start justify-between">

          <div className="flex items-center gap-3">

            {/* Avatar */}
            <div className="h-12 w-12 rounded-full bg-violet-500"></div>

            <div>
              <h3 className="font-semibold text-white">John Doe</h3>
              <p className="text-sm text-gray-400">
                @johndoe • Il y a 2 h
              </p>
            </div>

          </div>

          <button className="text-gray-400 hover:text-white transition">
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

      {/* Image du post */}
      <div className="mt-5 h-80 rounded-xl bg-[#2A2A33] flex items-center justify-center">
        <span className="text-gray-500">
          Image du post
        </span>
      </div>

      {/* Actions */}
      <div className="mt-5 flex items-center justify-between border-t border-[#2A2A33] pt-4">

        <button className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition">
          <HiHeart className="text-2xl" />
          <span>128</span>
        </button>

        <button className="flex items-center gap-2 text-gray-400 hover:text-violet-500 transition">
          <HiChat className="text-2xl" />
          <span>34</span>
        </button>
      {!ispartager&&(

        <button className="flex items-center gap-2 text-gray-400 hover:text-green-500 transition">
          <HiShare className="text-2xl" />
          <span>Partager</span>
        </button>
      )
      
      }

      </div>

    </article>
  );
}

export default Post;