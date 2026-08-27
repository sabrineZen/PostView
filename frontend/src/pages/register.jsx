import logo from "../assets/logo.svg";
import image from "../assets/image.png";
import RegisterForm from "../components/registerForm";

function Register() {
  return (
    <div className="grid min-h-screen grid-cols-1 bg-[#0B0B0F] lg:grid-cols-2">

      {/* Partie gauche */}
      <div
        className="hidden h-screen flex-col justify-between bg-cover bg-center p-10 lg:flex xl:p-16"
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
      <div className="flex min-h-screen items-center justify-center px-1 py-6 sm:px-4 sm:py-10 lg:px-8">
        <RegisterForm/>
      </div>
        
    </div>
  );
}

export default Register;