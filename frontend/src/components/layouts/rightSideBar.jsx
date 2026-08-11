    import SuggestedUser from "../SuggestedUser"
    import {getAllUsers} from "../../services/api"
    import { useEffect, useState } from "react";
    function RightSideBar(){
        const [users,setUsers]=useState([]);
        useEffect(()=>{
            const fetchUsers=async()=>{
                try{
                    const data=await getAllUsers();

                const randomUsers = [...data.users]
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 3);
                    setUsers(randomUsers);
                    console.log("Tous les utilisateurs :", data.users);
            console.log("Nombre :", data.users.length);
                } catch (error) {
                    console.error("Erreur lors de la récupération des utilisateurs :", error);
                }
            };
            fetchUsers();
        }, []);

        return(
            <div className="flex self-start  w-200 flex-col gap-8">
                <input
            type="search"
            placeholder=" ⌕ Rechercher..."
            className="w-full h-12 rounded-xl border-gray-800 bg-[#18181F] px-4 text-white outline-none border  focus:border-violet-500"
        />
                <div className="rounded-2xl bg-[#18181F] p-5 shadow-lg border border-gray-800 flex flex-col gap-8 ">
                <p className="flex self-start">Qui suivre</p>
                {users.map((user) => (
                    <SuggestedUser key={user.id} user={user} />
                ))}

                </div>
            </div>

        )

    }
    export default RightSideBar