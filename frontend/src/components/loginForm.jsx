import Landing from "../pages/landing";
import { useNavigate } from "react-router-dom";
import Inputs from "./ui/inputs";
import Button from "./ui/Button";
import RegisterForm from "./registerForm";
function LoginForm() {
  const navigate=useNavigate();
  const registerNavigate=()=>navigate("/register")
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
          Bon retour
        </p>

        <p className="text-gray-300 self-start">
          Connecte-toi pour retrouver ta communauté.
        </p>
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
          placeholder=""
        />
      </div>
      <Button className="rounded-xl mt-6 w-112 h-12"
        text="Se connecter"
        color="bg-violet-500"
      />
      <div className="mt-4">
      <p className="text-bold">pas encore de compte?
         <button className="text-violet-500 text-bold cursor-pointer" onClick={registerNavigate} > S'inscrire</button>
      </p>

      </div>
    </div>
  );
}
export default LoginForm;