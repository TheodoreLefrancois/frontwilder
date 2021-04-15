function Input({ handleChange, name, value }) {
  return (
    <div className="flex flex-col mb-4 w-full">
      <input
        className="text-red-500 placeholder-red-100 bg-transparent focus:outline-none"
        placeholder={name}
        type="text"
        onChange={handleChange}
        name={name}
        value={value}
      />
      <hr className="mt-2 w-full border-1 border-red-500"></hr>
    </div>
  );
}
export default Input;
