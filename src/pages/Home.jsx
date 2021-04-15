import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col sm:flex-row w-full h-full">
      <Link to="/addwilders">
        <div className="text-white bg-red-500 sm:w-1/2 h-full">Add wilders</div>
      </Link>
      <Link to="/wilders">
        <div className="bg-white text-red-500 sm:w-1/2 h-full">See wilders</div>
      </Link>
    </div>
  );
}
export default Home;
