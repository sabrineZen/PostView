import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Inputs from "./ui/inputs";
import Button from "./ui/Button";
import { login } from "../services/api";

function LoginForm() {
  const navigate = useNavigate();

  const registerNavigate = () => navigate("/register");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await login(email, password);

      if (response.ok) {
        const user = response.data?.utilisateur;
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
        }
        navigate("/home");
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-lg p-8">

      <button
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        ← Retour
      </button>

      <div className="mt-10 flex flex-col gap-4">
        <p className="self-start text-4xl font-extrabold text-white">
          Bon retour
        </p>

        <p className="self-start text-gray-300">
          Connecte-toi pour retrouver ta communauté.
        </p>
      </div>

      {/* Email */}
      <div className="mt-6 flex flex-col gap-1">
        <p className="self-start">Email</p>

        <Inputs
          type="email"
          placeholder="moi@exemple.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Mot de passe */}
      <div className="mt-6 flex flex-col gap-1">
        <p className="self-start">Password</p>

        <Inputs
          type="password"
          placeholder="......."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button
        className="mt-6 h-12 w-full rounded-xl transition-300 hover:bg-violet-600"
        text="Se connecter"
        color="bg-violet-500"
        onClick={handleLogin}
      />

      <div className="mt-4">
        <p className="font-bold">
          Pas encore de compte ?
          <button
            className="cursor-pointer font-bold text-violet-500"
            onClick={registerNavigate}
          >
            {" "}S'inscrire
          </button>
        </p>
      </div>

    </div>
  );
}

export default LoginForm;