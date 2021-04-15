import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header titlePage="Home" />
      <div className="flex flex-col sm:flex-row center text-5xl w-full h-full">
        <div className=" flex items-center justify-center text-white  bg-red-400 w-full  h-screen">
          <Link to="/addwilders">Add wilders</Link>
        </div>
        <div className=" flex items-center justify-center bg-white text-red-400 w-full  h-screen">
          <Link to="/wilders">See wilders</Link>
        </div>
      </div>
    </>
  );
}
export default Home;
