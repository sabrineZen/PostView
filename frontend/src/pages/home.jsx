import HomeNavbar from "../components/layouts/homeNavbar";
import RightSideBar from "../components/layouts/rightSideBar";
import Post from "../components/post";
import CreatePost from "../components/createPost";

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
                <CreatePost/>
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
        <aside className="hidden xl:flex fixed top-8 right-8 w-80 mr-40">
  <RightSideBar />
</aside>
      </div>

    </div>
  );
}

export default Home;