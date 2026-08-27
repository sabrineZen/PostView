import { useEffect, useState } from "react";
import SuggestedUser from "../SuggestedUser";
import {
    followUser,
    unfollowUser,
    getAllUsers,
    getFollowing,
    searchUsersByName,
    
} from "../../services/api";

function RightSideBar() {
    const [users, setUsers] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentUserId, setCurrentUserId] = useState(null);
    const [followingIds, setFollowingIds] = useState([]);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "null");
        setCurrentUserId(storedUser?.id || null);
    }, []);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getAllUsers();
                const availableUsers = (data.users || []).filter(
                    (user) => Number(user.id) !== Number(currentUserId)
                );
                setUsers(availableUsers.sort(() => Math.random() - 0.5).slice(0, 3));
            } catch (error) {
                console.error("Erreur lors de la récupération des utilisateurs :", error);
            }
        };

        if (currentUserId) fetchUsers();
    }, [currentUserId]);

    useEffect(() => {
        const fetchFollowing = async () => {
            if (!currentUserId) return;

            try {
                const data = await getFollowing(currentUserId);
                setFollowingIds((data.following || []).map((follow) => Number(follow.followingId)));
            } catch (error) {
                console.error("Erreur lors de la récupération des abonnements :", error);
            }
        };

        fetchFollowing();
    }, [currentUserId]);

    const handleSearch = async (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (!value.trim()) {
            setSearchResults([]);
            return;
        }

        try {
            const data = await searchUsersByName(value);
            setSearchResults((Array.isArray(data) ? data : []).filter(
                (user) => Number(user.id) !== Number(currentUserId)
            ));
        } catch (error) {
            console.error("Erreur lors de la recherche d'utilisateurs :", error);
        }
    };

    const handleFollow = async (userId) => {
        if (!currentUserId) return;

        try {
            const isFollowing = followingIds.includes(Number(userId));

            if (isFollowing) {
                await unfollowUser(currentUserId, userId);
                setFollowingIds((ids) => ids.filter((id) => id !== Number(userId)));
            } else {
                await followUser(currentUserId, userId);
                setFollowingIds((ids) => [...new Set([...ids, Number(userId)])]);
            }
        } catch (error) {
            console.error("Erreur lors du suivi de l'utilisateur :", error);
        }
    };

    const displayedUsers = searchTerm.trim() ? searchResults : users;

    return (
        <div className="flex w-full min-w-0 flex-col gap-8">
            <input
                type="search"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="⌕ Rechercher..."
                className="h-12 w-full rounded-xl border border-gray-800 bg-[#18181F] px-4 text-white outline-none focus:border-violet-500"
            />

            <div className="flex flex-col gap-6 rounded-2xl border border-gray-800 bg-[#18181F] p-5 shadow-lg">
                <p className="self-start">Qui suivre</p>
                {displayedUsers.length > 0 ? displayedUsers.map((user) => (
                    <SuggestedUser
                     
                        key={user.id}
                        user={user}
                        userId={user.id}
                        isFollowing={followingIds.includes(Number(user.id))}
                        onFollow={() => handleFollow(user.id)}
                    />
                )) : (
                    <p className="text-sm text-gray-500">Aucun utilisateur trouvé.</p>
                )}
            </div>
        </div>
    );
}

export default RightSideBar;