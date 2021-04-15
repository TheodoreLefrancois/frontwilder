function Button({ onClick, text }) {
  return (
    <button
      className="focus:outline-none rounded-full text-center text-white bg-red-500 hover:text-red-500 hover:border-2 hover:border-red-500 hover:bg-white w-44 h-8"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
export default Button;
