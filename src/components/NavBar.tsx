import { Link, NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div
      id="nav-items"
      className="text-lg h-full flex items-center justify-center"
    >
      <div className="ml-10 h-3/4 flex items-center border-b-2 border-cyan-950 nav-button">
        <Link
          to="/movies/popular"
          className={`${
            pathname.includes("movies") ? "active" : ""
          } hover:text-cyan-300 transition ease delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}
        >
          Movies
        </Link>
      </div>
      <div className="ml-10 h-3/4 flex items-center border-b-2 border-cyan-950 nav-button">
        <Link
          to="/series/popular"
          className={`${
            pathname.includes("series") ? "active" : ""
          } hover:text-cyan-300 transition ease delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}
        >
          Series
        </Link>
      </div>
      <button className="ml-20">Project</button>
    </div>
  );
};
