import { BiGitBranch } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div
      id="nav-items"
      className="text-lg h-full flex items-center justify-center"
    >
      <div className="ml-10 h-3/4 flex items-center nav-button">
        <Link
          to="/movies/popular"
          className={`${
            pathname.includes("movies") ? "active" : ""
          }  transition ease duration-300 hover:text-cyan-600 delay-150 hover:-translate-y-1`}
        >
          Movies
        </Link>
      </div>
      <div className="ml-10 h-3/4 flex items-center border-cyan-950 nav-button">
        <Link
          to="/series/popular"
          className={`${
            pathname.includes("series") ? "active" : ""
          } transition ease duration-300 hover:text-cyan-600 delay-150 hover:-translate-y-1`}
        >
          Series
        </Link>
      </div>
      <button className="ml-20">
        <a
          href="https://github.com/suedmuniz1/movies-info"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-800 rounded-full flex justify-evenly items-center w-20 h-10 hover:text-cyan-300 transition ease delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        >
          <FaStar />
          <BiGitBranch />
        </a>
      </button>
    </div>
  );
};
