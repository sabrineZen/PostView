import { useState, useEffect } from "react";
import { HiHeart, HiChat, HiShare, HiDotsHorizontal } from "react-icons/hi";
import { getUserNameById, createComment, toggleLike } from "../services/api";
import { useNavigate } from "react-router-dom";

function Post({ post, isProfile = false, ispartager = false, iscommentaire = false }) {
  const navigate = useNavigate();
  const [showComments, setShowComments] = useState(false);
  const [userName, setUserName] = useState("John Doe");
  const [authorPhoto, setAuthorPhoto] = useState("");
  const [commentInput, setCommentInput] = useState("");
  const [options, setOptions] = useState(false);
  const [notInterested, setNotInterested] = useState(false);
  const [comments, setComments] = useState(() =>
    Array.isArray(post?.commentaires) ? post.commentaires : []
  );
  const [likes, setLikes] = useState(() => post?.likesCount ?? post?.likes ?? 0);
  const [liked, setLiked] = useState(false);

  const safePost = post || {};

  const content =
    safePost.contenu ||
    safePost.content ||
    "Aucun contenu pour le moment.";

  const imageName = safePost.image || safePost.Image || null;

  const imageUrl = imageName
    ? imageName.startsWith("http")
      ? imageName
      : `http://localhost:5000/uploads/${imageName}`
    : null;

  const userId = safePost.utilisateurId;
  const postAuthorPhoto = safePost.utilisateur?.photoProfil;

  useEffect(() => {
    if (postAuthorPhoto) {
      setAuthorPhoto(postAuthorPhoto);
    }
  }, [postAuthorPhoto]);

  useEffect(() => {
    const getAuthorName = async () => {
      try {
        if (userId) {
          const data = await getUserNameById(userId);
          setUserName(data.userName || "Utilisateur");
          setAuthorPhoto(
            (currentPhoto) => currentPhoto || data.photoProfil || ""
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    getAuthorName();
  }, [userId]);

  useEffect(() => {
    const nextComments = Array.isArray(safePost.commentaires)
      ? safePost.commentaires
      : [];

    const nextLikes = safePost.likesCount ?? safePost.likes ?? 0;

    setComments((previousComments) => {
      const sameComments =
        JSON.stringify(previousComments) === JSON.stringify(nextComments);

      return sameComments ? previousComments : nextComments;
    });

    setLikes((previousLikes) =>
      previousLikes === nextLikes ? previousLikes : nextLikes
    );
  }, [
    safePost.id,
    safePost.commentaires,
    safePost.likesCount,
    safePost.likes,
  ]);

  const authorName = userName || "John Doe";
  const authorHandle = "@" + (userName || "johndoe");

  const createdAt = safePost.createdAt
    ? new Date(safePost.createdAt).toLocaleString("fr-FR", {
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "Il y a 2 h";

  const commentsCount = safePost.commentsCount ?? comments.length ?? 0;

  const handleCommentSubmit = async () => {
    if (!commentInput.trim()) return;

    try {
      const storedUser = JSON.parse(localStorage.getItem("user") || "null");
      const utilisateurId = storedUser?.id;

      if (!utilisateurId) {
        alert("Connectez-vous pour commenter.");
        return;
      }

      const payload = await createComment(
        safePost.id,
        utilisateurId,
        commentInput.trim()
      );

      const newComment = payload.commentaire;

      setComments((prev) => [...prev, newComment]);
      setCommentInput("");
    } catch (error) {
      console.error(error);
      alert(error.message || "Impossible d'ajouter le commentaire.");
    }
  };

  const handleLike = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user") || "null");
      const utilisateurId = storedUser?.id;

      if (!utilisateurId) {
        alert("Connectez-vous pour liker.");
        return;
      }

      const payload = await toggleLike(safePost.id, utilisateurId);

      setLiked(payload.liked);
      setLikes(payload.likesCount);
    } catch (error) {
      console.error(error);
      alert(error.message || "Impossible de mettre à jour le like.");
    }
  };

  const handleNotInterested = () => {
    setNotInterested(true);
    setOptions(false);
  };

  if (notInterested) {
    return null;
  }

  return (
    <article className="w-full rounded-2xl border border-gray-800 bg-[#18181F] p-5 shadow-lg">
      {!isProfile && (
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {authorPhoto ? (
              <img
                src={`http://localhost:5000/uploads/${authorPhoto}`}
                alt={`Photo de ${authorName}`}
                className="h-12 w-12 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500 font-semibold text-white">
                {authorName.charAt(0).toUpperCase()}
              </div>
            )}

            <div>
              <h3
                onClick={() => navigate("/profil/" + userId)}
                className="flex cursor-pointer self-start font-semibold text-white"
              >
                {authorName}
              </h3>

              <p className="text-sm text-gray-400">
                {authorHandle} • {createdAt}
              </p>
            </div>
          </div>

          <div className="relative">
            <button
              onClick={() => setOptions(!options)}
              className="text-gray-400 transition hover:text-white"
              aria-label="Options du post"
            >
              <HiDotsHorizontal className="text-2xl" />
            </button>

            {options && (
              <div className="absolute right-0 top-8 z-10 w-32 overflow-hidden rounded-lg bg-[#2A2A33] shadow-lg">
                <button
                  onClick={handleNotInterested}
                  className="w-full cursor-pointer px-3 py-2 text-left text-gray-200 hover:bg-violet-900"
                >
                  Pas intéressé
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <div className={isProfile ? "" : "mt-5"}>
        <p className="leading-7 text-gray-200">{content}</p>
      </div>

      {imageUrl && (
        <div className="mt-5 flex h-80 items-center justify-center overflow-hidden rounded-xl bg-[#2A2A33]">
          <img
            src={imageUrl}
            alt="Image du post"
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="mt-5 flex items-center justify-between border-t border-[#2A2A33] pt-4">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 transition ${
            liked
              ? "text-red-500"
              : "text-gray-400 hover:text-red-500"
          }`}
        >
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
            <div className="flex gap-2">
              <input
                type="text"
                value={commentInput}
                onChange={(event) => setCommentInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleCommentSubmit();
                  }
                }}
                placeholder="Écrire un commentaire..."
                className="w-full rounded-xl bg-[#2A2A33] p-3 text-white outline-none placeholder:text-gray-500"
              />

              <button
                onClick={handleCommentSubmit}
                className="rounded-xl bg-violet-600 px-4 py-2 font-medium text-white hover:bg-violet-500"
              >
                Envoyer
              </button>
            </div>
          )}

          <div className="mt-6 space-y-5">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={comment.id || index} className="flex gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500 font-semibold text-white">
                    {(
                      comment.utilisateur?.nom ||
                      comment.author?.nom ||
                      "U"
                    )
                      .charAt(0)
                      .toUpperCase()}
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      {comment.utilisateur?.nom ||
                        comment.author?.nom ||
                        "Utilisateur"}
                    </h4>

                    <p className="text-gray-400">
                      {comment.contenu ||
                        comment.content ||
                        " commentaire"}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">
                Aucun commentaire pour le moment.
              </p>
            )}
          </div>
        </div>
      )}
    </article>
  );
}

export default Post;