import posts from "../assets/posts.png";
import { useNavigate } from "react-router-dom";

function SuggestedUser({ user, userId, isFollowing, onFollow }) {
  const navigate = useNavigate();
  const displayedUserId = userId ?? user?.id;
  const profileImage = user?.photoProfil
    ? `http://localhost:5000/uploads/${user.photoProfil}`
    : posts;

  return (
    <div className="flex items-center justify-between gap-3">
      <div
        className="flex min-w-0 cursor-pointer items-center gap-3"
        onClick={() => navigate(`/profil/${displayedUserId}`)}
      >
        <img
          src={profileImage}
          alt={`Photo de ${user.nom}`}
          className="h-12 w-12 shrink-0 rounded-full object-cover"
        />

        <div className="min-w-0">
          <p className="truncate font-semibold text-white">{user.nom}</p>
          <p className="truncate text-sm text-gray-400">@{user.nom}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={onFollow}
        className="shrink-0 rounded-xl border border-[#4C2D8A] bg-[#36235E] px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#4A2F80]"
      >
        {isFollowing ? "Ne plus suivre" : "Suivre"}
      </button>
    </div>
  );
}

export default SuggestedUser;