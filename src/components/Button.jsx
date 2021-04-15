function Button({ onClick, text }) {
  return (
    <button
      className="focus:outline-none rounded- text-center text-white bg-red-500 w-44 h-8"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
export default Button;
