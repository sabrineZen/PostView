import HomeNavbar from "../components/layouts/homeNavbar";
import RightSideBar from "../components/layouts/rightSideBar";
import Post from "../components/post";

function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">

      <div className="mx-auto flex max-w-[1500px]">

        {/* Navbar */}
        <aside className="hidden lg:flex w-72 justify-center">
          <HomeNavbar />
        </aside>

        {/* Feed */}
        <main className="flex-1 flex justify-center px-6 py-8">

          <div className="w-full max-w-[720px]">

            {/* Créer un post */}
            <div className="rounded-2xl bg-[#18181F] p-5">
              Create Post
            </div>

            {/* Feed */}
            <div className="mt-6 flex flex-col gap-6">
              <Post />
              <Post />
              <Post />
              <Post />
            </div>

          </div>

        </main>

        {/* Sidebar droite */}
        <aside className="hidden xl:flex w-80 justify-center bg-violet-500 ">
          <RightSideBar />
        </aside>

      </div>

    </div>
  );
}

export default Home;