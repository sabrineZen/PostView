import logo from "../assets/logo.svg";
import image from "../assets/image.png";
import LoginForm from "../components/loginForm";

function Login() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] grid grid-cols-2">

      {/* Partie gauche */}
      <div
        className="h-screen bg-cover bg-center flex flex-col justify-between p-16"
        style={{ backgroundImage: `url(${image})` }}
      >

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="PostView Logo"
            className="h-12 md:h-14 w-auto"
          />

          <h1 className="font-bold text-3xl md:text-4xl">
            <span className="font-outfit text-white">Post</span>
            <span className="font-outfit text-violet-500">View</span>
          </h1>
        </div>


        {/* Texte en bas */}
        <div className="self-start ">
          <p className="text-white text-4xl font-extrabold ">
            Partage ce qui te vient à la tête.
          </p>
        </div>

      </div>


      {/* Partie droite */}
      <div className="flex justify-center items-center">
        <LoginForm/>
      </div>
        
    </div>
  );
}

export default Login;