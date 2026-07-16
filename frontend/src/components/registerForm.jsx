import Landing from "../pages/landing";
import { useNavigate } from "react-router-dom";
import Inputs from "./ui/inputs";
import Button from "./ui/Button";
import Login from "../pages/login";
function RegisterForm() {
  const navigate=useNavigate();
  const loginNavigate=()=>navigate("/login")
  return (
    <div className="w-full max-w-lg p-8  ">

      <button 
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        ← Retour
      </button>

      <div className="flex flex-col gap-4 mt-10">
        <p className="text-4xl font-extrabold text-white self-start">
          Rejoindre PostView
        </p>

        <p className="text-gray-300 self-start">
          Crée ton compte et commence à partager.
        </p>
      </div>
        {/*nom utilisateur */}
        <div className="flex flex-col gap-1 mt-6">
        <p className="flex self-start">Nom d'utilisateur</p>
        <Inputs 
          type="text" 
          placeholder="monpseudo"
        />
      </div>
        {/*email */}
      <div className="flex flex-col gap-1 mt-6">
        <p className="flex self-start">Email</p>
        <Inputs 
          type="email" 
          placeholder="moi@exemple.com"
        />
      </div>
      {/*motpasse */}
      <div className="flex flex-col gap-1 mt-6">
        <p className="flex self-start">Password</p>
        <Inputs 
          type="password" 
          placeholder="........."
        />
      </div>
      <Button className="rounded-xl mt-6  w-full h-12"
        text="créer mon compte"
        color="bg-violet-500"
      />
      <div className="mt-4">
      <p className="text-bold">deja un compte?
         <button className="text-violet-500 text-bold cursor-pointer"  onClick={loginNavigate}>Se connecter</button>
      </p>

      </div>
    </div>
  );
}
export default RegisterForm;