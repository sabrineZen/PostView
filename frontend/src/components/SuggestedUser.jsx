import posts from '../assets/posts.png'
function SuggestedUser() {
  return (
    <div className="flex items-center justify-between">
       
      <div className="flex items-center gap-3">
        <img
          src={posts}
          alt="Post"
          className="h-12 w-12 rounded-full object-cover"
        />

        <div>
          <p className="font-semibold text-white">sabrine</p>
          <p className="text-sm text-gray-400">@sabrine</p>
        </div>
      </div>

      <button
        className="rounded-xl bg-[#36235E] border border-[#4C2D8A] px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#4A2F80]"
        >
        Suivre
      </button>
    </div>
  );
}

export default SuggestedUser;