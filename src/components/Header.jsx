import { Link } from "react-router-dom";

function Header({ titlePage }) {
  return (
    <div className="flex flex-row justify-between w-full items-center bg-red-500 text-white text-xl h-20 pr-7">
      <Link to="/">
        <img src="/assets/wcs.png" alt="logoWCS" height="80px" width="80px" />
      </Link>
      {titlePage}
    </div>
  );
}
export default Header;
