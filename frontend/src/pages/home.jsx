import HomeNavbar from "../components/layouts/homeNavbar";
import RightSideBar from "../components/layouts/rightSideBar";
import Post from "../components/post";
import CreatePost from "../components/createPost";
import { useEffect, useState } from "react";
import { getAllPosts, createPost } from "../services/api";

function Home() {
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getAllPosts();
        setPosts(data.Posts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">

      <div className="mx-auto flex w-full max-w-[1500px] flex-col items-start lg:flex-row">

        {/* Navbar */}
        <aside className="w-full shrink-0 lg:w-64 xl:w-72">
          <HomeNavbar />
        </aside>

        {/* Feed */}
        <main className="min-w-0 flex-1 px-3 py-5 sm:px-6 sm:py-8">

          <div className="mx-auto w-full max-w-[720px]">

            {/* Créer un post */}
            <CreatePost />
            {/* Feed */}
            <div className="mt-6 flex flex-col gap-6 ">
              {posts.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </div>

          </div>

        </main>

        {/* Sidebar droite */}
        <aside className="hidden w-72 shrink-0 px-3 py-8 xl:flex 2xl:w-80">
          <RightSideBar />
        </aside>
      </div>

    </div>
  );
}

export default Home;