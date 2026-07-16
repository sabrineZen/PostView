 function Button({ text, onClick,color, type = "button", className = "" }) {
  return (
    <button
      type={type}
className={
  className +
  " px-4 py-2  cursor-pointer " +
  color +
  " text-white " +
  " transition-colors duration-300 font-bold  "
}      onClick={onClick}
    >
      {text}
    </button>
  );
}
export default Button;