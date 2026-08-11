import { useState,useEffect } from "react";
import { HiHeart, HiChat, HiShare, HiDotsHorizontal } from "react-icons/hi";
import { getUserNameById } from "../services/api";


function Post({ post, isProfile = false, ispartager = false, iscommentaire = false }) {
  const [showComments, setShowComments] = useState(false);
  const [userName, setUserName] = useState("John Doe");

  const safePost = post || {};
  const content = safePost.contenu || safePost.content || "Aucun contenu pour le moment.";
  const imageName = safePost.image || safePost.Image || null;
  const imageUrl = imageName
  ? imageName.startsWith("http")
  ? imageName
  : `http://localhost:5000/uploads/${imageName}`
  : null;
  const userId = safePost.utilisateurId;
  useEffect(() => {
    const getAuthorName = async () => {
        try {

            if (userId) {
                const data = await getUserNameById(userId);
                setUserName(data.userName);
            }
        } catch (error) {
            console.error(error);
        }
    };

    getAuthorName();
}, [userId]);
  const authorName =
   userName|| "John Doe";
  const authorHandle =
   '@' + (userName || "@johndoe");
  const createdAt = safePost.createdAt
    ? new Date(safePost.createdAt).toLocaleString("fr-FR", {
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "Il y a 2 h";

  const likes = safePost.likesCount ?? safePost.likes ?? 128;
  const comments = Array.isArray(safePost.commentaires) ? safePost.commentaires : [];
  const commentsCount = safePost.commentsCount ?? comments.length ?? 34;
      
  return (
    <article className="w-full rounded-2xl border border-gray-800 bg-[#18181F] p-5 shadow-lg">
      {!isProfile && (
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500 font-semibold text-white">
              {authorName.charAt(0).toUpperCase()}
            </div>

            <div>
              <h3 className="flex self-start font-semibold text-white">{authorName}</h3>
              <p className="text-sm text-gray-400">
                {authorHandle} • {createdAt}
              </p>
            </div>
          </div>

          <button className="text-gray-400 transition hover:text-white" aria-label="Options du post">
            <HiDotsHorizontal className="text-2xl" />
          </button>
        </div>
      )}

      <div className={isProfile ? "" : "mt-5"}>
        <p className="leading-7 text-gray-200">{content}</p>
      </div>

      {imageUrl && (
        <div className="mt-5 flex h-80 items-center justify-center overflow-hidden rounded-xl bg-[#2A2A33]">
          <img src={imageUrl} alt="Image du post" className="h-full w-full object-cover" />
        </div>
      )}

      <div className="mt-5 flex items-center justify-between border-t border-[#2A2A33] pt-4">
        <button className="flex items-center gap-2 text-gray-400 transition hover:text-red-500">
          <HiHeart className="text-2xl" />
          <span>{likes}</span>
        </button>

        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-2 text-gray-400 transition hover:text-violet-500"
        >
          <HiChat className="text-2xl" />
          <span>{commentsCount}</span>
        </button>

        {!ispartager && (
          <button className="flex items-center gap-2 text-gray-400 transition hover:text-green-500">
            <HiShare className="text-2xl" />
            <span>Partager</span>
          </button>
        )}
      </div>

      {showComments && (
        <div className="mt-5 border-t border-[#2A2A33] pt-5">
          {!iscommentaire && (
            <input
              type="text"
              placeholder="Écrire un commentaire..."
              className="w-full rounded-xl bg-[#2A2A33] p-3 text-white outline-none placeholder:text-gray-500"
            />
          )}

          <div className="mt-6 space-y-5">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={comment.id || index} className="flex gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500 font-semibold text-white">
                    {(comment.author?.nom || "U").charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      {comment.author?.nom || "Utilisateur"}
                    </h4>
                    <p className="text-gray-400">
                      {comment.contenu || comment.content || " commentaire"}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Aucun commentaire pour le moment.</p>
            )}
          </div>
        </div>
      )}
    </article>
  );
}

export default Post;