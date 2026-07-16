import React from 'react';
import { HiSparkles} from "react-icons/hi";
import LandingNavbar from '../components/layouts/landingNavbar.jsx';
import Button from '../components/ui/Button.jsx'
import posts from '../assets/posts.png'
import communaute from '../assets/communaute.png'
import Cards  from '../components/cards.jsx';
import { useNavigate } from 'react-router-dom';
function Landing() {
  const navigate=useNavigate();
  const loginNavigate=()=>navigate("/login")
  return (
    <div className="relative min-h-screen bg-[#0B0B0F] overflow-hidden pb-10">

      <LandingNavbar />
      {/* Lumière violette */}
      <div className="absolute top-0 left-1/3-translate-x-1/2 w-[500px] h-[500px] rounded-full bg-violet-600 blur-[180px] opacity-30">
      </div>
       <div className="flex justify-center mt-40">
          <div className="bg-[#1A1033] border border-violet-500 text-violet-300 font-outfit h-10 w-80 flex justify-center items-center gap-2 rounded-3xl">
             <HiSparkles className="text-violet-400 text-lg" />
               La nouvelle facon de partager
          </div>
        </div>
        {/*un slogon */}
      <div className="flex justify-center mt-10 flex-col gap-2 font-outfit">
        <span className="text-8xl text-white font-bold text-center"> Connecte-toi. </span> 
        <span className=" text-8xl text-violet-500  font-bold text-center">Partage.</span>
        <span className="text-8xl text-white font-bold text-center"> Inspire. </span>    
      </div>
      <div className="flex justify-center mt-10">
        {/*une petite def de mon appli */}
        <p className="font-bold text-lg font-outfit">
          PostView est une plateforme sociale où chacun peut publier,
          <br /> échanger et découvrir de nouvelles idées.
        </p>
      </div>
      {/*lumiere violette */}
       <div className="absolute top-160 right-0 w-[500px] h-[500px] rounded-full bg-violet-600 blur-[180px] opacity-30">
      </div>
       <Button className=" rounded-2xl mt-10 h-15 text-xl font-outfit w-90 font-semibold "
            text="Commencer maintenant →"
            color="bg-violet-500 hover:bg-violet-600"
            onClick={loginNavigate}
          />
        
      {/* Statistiques */}
      <Cards/>
      {/*ce que l appli a */}
      <div className="flex justify-center gap-6 mt-24 flex-wrap">

          {/* Carte 1 */}
          <div className="w-[580px] h-[400px] rounded-2xl border border-[#2A2A35] bg-[#17171F] overflow-hidden">

            {/* Image */}
            <div className="h-[60%]">
              <img
                src={posts}
                alt="Posts"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Texte */}
            <div className="h-[40%] p-6 flex flex-col justify-center">

              <h3 className="text-white text-2xl font-bold font-outfit">
                Posts visuels & textuels
              </h3>

              <p className="text-gray-400 mt-3 font-outfit">
                Partage tes moments avec photos, textes sans limite de format.
                Ton audience t'attend.
              </p>

            </div>

          </div>

          {/* Carte 2 */}
          <div className="w-[580px] h-[400px] rounded-2xl border border-[#2A2A35] bg-[#17171F] overflow-hidden">

            <div className="h-[60%]">
              <img
                src={communaute}
                alt="Communauté"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="h-[40%] p-6 flex flex-col justify-center">

              <h3 className="text-white text-2xl font-bold font-outfit">
                Communauté engagée
              </h3>

              <p className="text-gray-400 mt-3 font-outfit">
                Likes, commentaires . Chaque interaction compte.
              </p>

            </div>

          </div>

      </div>
      

  
    </div>
  );
}

export default Landing;