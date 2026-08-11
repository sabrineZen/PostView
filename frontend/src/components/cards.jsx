import {HiOutlineUsers, HiOutlineChartBar} from "react-icons/hi"
import { useState, useEffect } from 'react';
import { getNumberOfPosts ,getNumberOfUsers} from "../services/api";
function Cards(){

    const [numberOfUsers, setNumberOfUsers] = useState(0);
  const [numberOfPosts, setNumberOfPosts] = useState(0);

  useEffect(() => {
    const fetchNumbers = async () => {
      try {
        const usersData = await getNumberOfUsers();
        const postsData = await getNumberOfPosts();

        setNumberOfUsers(usersData.numberOfUsers);
        setNumberOfPosts(postsData.postCount);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des statistiques :",
          error
        );
      }
    };

    fetchNumbers();
  }, []);
    return(
    

        <div className="flex justify-center gap-16 mt-40 flex-wrap">
        
                {/* Créateurs actifs */}
                <div className="w-120 h-52 rounded-2xl border border-[#2A2A35] bg-[#17171F] flex flex-col items-center justify-center">
        
                  <HiOutlineUsers className="text-3xl text-violet-500 mb-4" />
        
                  <h2 className="text-5xl font-bold text-white font-outfit">
                    {numberOfUsers.toLocaleString()}
                  </h2>
        
                  <p className="text-gray-400 font-outfit mt-2">
                    Créateurs actifs
                  </p>
        
                </div>
        
                {/* Posts publiés */}
                <div className="w-120 h-52 rounded-2xl border border-[#2A2A35] bg-[#17171F] flex flex-col items-center justify-center">
        
                  <HiOutlineChartBar className="text-3xl text-violet-500 mb-4" />
        
                  <h2 className="text-5xl font-bold text-white font-outfit">
                    {numberOfPosts.toLocaleString()}
                  </h2>
        
                  <p className="text-gray-400 font-outfit mt-2">
                    Posts publiés
                  </p>
        
                </div>
        
              </div>

    )


}
export default Cards;