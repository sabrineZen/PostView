import { HiPhotograph } from "react-icons/hi";
import posts from "../assets/posts.png";
import Button from "./ui/Button";

function CreatePost() {
  return (
    <div className="rounded-2xl border border-[#2A2A33] bg-[#18181F] p-5">

      {/* Haut */}
      <div className="flex items-start gap-4">

        <img
          src={posts}
          alt="Profil"
          className="h-12 w-12 rounded-full object-cover border-2 border-violet-500"
        />

        {/* Zone de texte */}
        <textarea
          placeholder="Quoi de neuf ?"
          className="h-20 w-full resize-none bg-transparent text-white placeholder:text-gray-500 outline-none"
        />

      </div>

      <div className="my-4 border-t border-[#2A2A33]" />

      <div className="flex items-center justify-between">

        <button className="text-gray-500 transition hover:text-violet-400">
          <HiPhotograph className="text-2xl" />
        </button>

        <Button
          text="Publier"
          className="h-11 w-32 rounded-xl font-semibold"
          color="bg-violet-600 hover:bg-violet-700"
        />

      </div>

    </div>
  );
}

export default CreatePost;