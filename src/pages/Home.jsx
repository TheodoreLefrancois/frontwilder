import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header titlePage="Home" />
      <div className="flex flex-col sm:flex-row justify-between w-full h-full">
        <Link to="/addwilders">
          <div className="text-white bg-red-500 w-full  h-full">
            Add wilders
          </div>
        </Link>
        <Link to="/wilders">
          <div className="bg-white text-red-500 w-full   h-full">
            See wilders
          </div>
        </Link>
      </div>
    </>
  );
}
export default Home;
