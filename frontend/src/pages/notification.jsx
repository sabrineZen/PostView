import HomeNavbar from "../components/layouts/homeNavbar";
import RightSideBar from "../components/layouts/rightSideBar";
import { useNavigate } from "react-router-dom";

import {
  HiArrowLeft,
  HiHeart,
  HiChat,
  HiUserAdd,
  HiShare,
} from "react-icons/hi";

function Notification() {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      type: "like",
      user: "Sarah",
      message: "a aimé votre publication.",
      time: "Il y a 2 min",
    },
    {
      id: 2,
      type: "comment",
      user: "Thomas",
      message: "a commenté votre publication.",
      time: "Il y a 15 min",
    },
    {
      id: 3,
      type: "follow",
      user: "Ahmed",
      message: "a commencé à vous suivre.",
      time: "Il y a 1 h",
    },
    {
      id: 4,
      type: "share",
      user: "Lina",
      message: "a partagé votre publication.",
      time: "Hier",
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "like":
        return <HiHeart className="text-red-500 text-2xl" />;
      case "comment":
        return <HiChat className="text-violet-500 text-2xl" />;
      case "follow":
        return <HiUserAdd className="text-blue-500 text-2xl" />;
      case "share":
        return <HiShare className="text-green-500 text-2xl" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      <div className="mx-auto flex max-w-[1500px] flex-col">
         <button
             onClick={() => navigate("/home")}
              className="rounded-full p-2 w-10 text-gray-400 transition hover:bg-[#1A1A22] hover:text-white"
         >
                <HiArrowLeft className="text-2xl" />
         </button>
     

        {/* Contenu */}
        <main className="flex-1 px-8 py-8">

          <h1 className="text-3xl font-bold mb-8">
            Notifications
          </h1>

          <div className="space-y-4">

            {notifications.map((notif) => (
              <div
                key={notif.id}
                className="flex items-center gap-4 rounded-2xl border border-[#2A2A33] bg-[#18181F] p-5 hover:border-violet-500 transition"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#252530]">
                  {getIcon(notif.type)}
                </div>

                <div className="flex-1">
                  <p>
                    <span className="font-semibold">
                      {notif.user}
                    </span>{" "}
                    {notif.message}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {notif.time}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </main>

       

      </div>
    </div>
  );
}

export default Notification;