import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

function Inputs({ type, placeholder, value, onChange }) {

  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="relative">

      <input
        type={isPassword && showPassword ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-12 rounded-lg bg-[#18181F] px-4 pr-12 text-white border border-transparent focus:border-violet-500 outline-none "
      />


      {isPassword && (
        <button
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <HiEyeOff /> : <HiEye />}
        </button>
      )}

    </div>
  );
}

export default Inputs;