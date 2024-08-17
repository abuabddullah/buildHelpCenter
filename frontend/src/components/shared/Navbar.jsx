import { Link } from "react-router-dom";
import bhc_logo from "./../../assets/BHC logo.png";
const Navbar = () => {
  return (
    <nav className="bg-slate-900 md:grid md:grid-cols-2 md:px-24 px-4 py-6 md:items-center">
      <div className="md:flex md:gap-2 text-white">
        <div className="flex gap-2 text-lg">
          <img
            className="bg-white p-1 rounded-lg"
            width="24px"
            height="24px"
            src={bhc_logo}
            alt="logo"
          />{" "}
          <Link to="/">Abstract</Link>
        </div>
        <div className="border-l-2 pl-2 text-lg hidden md:block">
          Help Center
        </div>
      </div>
      <div className="md:flex md:justify-center  hidden">
        <Link to="/postCard">
          <button className="p-2 border-[#4B4B4B] border rounded-lg text-lg  text-white">
            Submit a request
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
