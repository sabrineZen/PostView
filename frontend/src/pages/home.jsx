import HomeNavbar from "../components/layouts/homeNavbar";
import RightSideBar from "../components/layouts/rightSideBar";
import Post from "../components/post";
import CreatePost from "../components/createPost";
import { useEffect, useState } from "react";
import { getAllPosts } from "../services/api";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getAllPosts();
        setPosts(Array.isArray(data.Posts) ? data.Posts : []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
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
            <header className="mb-6 flex items-end justify-between border-b border-white/10 pb-4">
              <div className="text-left">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
                  Postview
                </p>
                <h1 className="text-2xl font-bold text-white sm:text-3xl">
                  Fil d’actualité
                </h1>
              </div>
              <span className="mb-1 text-sm text-gray-400">
                {posts.length} {posts.length === 1 ? "publication" : "publications"}
              </span>
            </header>

            {/* Créer un post */}
            <CreatePost />
            {/* Feed */}
            <div className="mt-6 flex flex-col gap-6 ">
              {loading ? (
                <div className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-10 text-center text-sm text-gray-400" role="status">
                  Chargement du fil...
                </div>
              ) : posts.length > 0 ? (
                posts.map((post) => <Post key={post.id} post={post} />)
              ) : (
                <div className="rounded-xl border border-dashed border-white/15 bg-white/[0.02] px-5 py-12 text-center">
                  <h2 className="text-lg font-semibold text-white">
                    Aucune publication pour le moment
                  </h2>
                  <p className="mt-2 text-sm text-gray-400">
                    Les nouvelles publications apparaîtront ici.
                  </p>
                </div>
              )}
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