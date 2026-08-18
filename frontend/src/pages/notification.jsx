import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft, HiHeart, HiChat, HiUserAdd, HiShare } from "react-icons/hi";
import { getNotifications } from "../services/api";

function Notification() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (!user?.id) return;

    const loadNotifications = async () => {
      try {
        const data = await getNotifications(user.id);
        setNotifications(data.notifications || []);
      } catch (error) {
        console.error("Erreur notifications :", error);
        setNotifications([]);
      }
    };

    loadNotifications();
  }, []);

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

        <main className="flex-1 px-8 py-8">
          <h1 className="text-3xl font-bold mb-8">Notifications</h1>

          <div className="space-y-4">
            {notifications.length > 0 ? (
              notifications.map((notif) => (
                <div
                  key={notif.id}
                  className="flex items-center gap-4 rounded-2xl border border-[#2A2A33] bg-[#18181F] p-5 hover:border-violet-500 transition"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#252530]">
                    {getIcon(notif.type)}
                  </div>

                  <div className="flex-1">
                    <p>
                      <span className="font-semibold">{notif.emetteur?.nom || "Quelqu'un"}</span>{" "}
                      {notif.type === "comment"
                        ? "a commenté votre publication."
                        : "a aimé votre publication."}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      {notif.createdAt
                        ? new Date(notif.createdAt).toLocaleString("fr-FR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })
                        : "À l'instant"}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-2xl border border-[#2A2A33] bg-[#18181F] p-5 text-gray-400">
                Aucune notification pour le moment.
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Notification;