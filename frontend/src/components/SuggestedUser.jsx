import posts from '../assets/posts.png'
import { useNavigate } from "react-router-dom";
function SuggestedUser({ user, userId, isFollowing, onFollow }) {
    const navigate = useNavigate();
  const displayedUserId = userId ?? user?.id;

  return (
    <div className="flex items-center justify-between">
       
      <div className="flex items-center gap-3">
        <img
          src={posts}
          alt="Post"
          className="h-12 w-12 rounded-full object-cover"
        />

        <div
         onClick={() => navigate(`/profil/${displayedUserId}`)}
        >
          <p className="font-semibold text-white cursor-pointer">{user.nom}</p>
          <p className="text-sm text-gray-400">@{user.nom}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={onFollow}
        className="rounded-xl bg-[#36235E] border border-[#4C2D8A] px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#4A2F80]"
        >
        {isFollowing ? "Ne plus suivre" : "Suivre"}
      </button>
    </div>
  );
}

export default SuggestedUser;