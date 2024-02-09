import { NavLink, useLocation } from "react-router-dom";
import "./MoviesNavBar.css";

export const MoviesNavBar = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-full flex justify-center">
      <div className="w-2/4 flex justify-evenly">
        <NavLink
          to="/movies/popular"
          className={`text-cyan-800 font-bold text-2xl transition ease delay-150 hover:text-cyan-300 hover:-translate-y-1 hover:scale-110 duration-300 ${
            pathname === "/movies/popular" ? "active" : ""
          }`}
        >
          Popular
        </NavLink>
        <NavLink
          to="/movies/upcoming"
          className={`text-cyan-800 font-bold text-2xl transition ease delay-150 hover:text-cyan-300 hover:-translate-y-1 hover:scale-110 duration-300 ${
            pathname === "/movies/upcoming" ? "active" : ""
          }`}
        >
          Upcoming
        </NavLink>

        <NavLink
          to="/movies/top-rated"
          className={`text-cyan-800 font-bold text-2xl transition ease delay-150 hover:text-cyan-300 hover:-translate-y-1 hover:scale-110 duration-300 ${
            location.pathname === "/movies/top-rated" ? "active" : ""
          }`}
        >
          Top rated
        </NavLink>
        <NavLink
          to="/movies/now-playing"
          className={`text-cyan-800 font-bold text-2xl transition ease delay-150 hover:text-cyan-300 hover:-translate-y-1 hover:scale-110 duration-300 ${
            location.pathname === "/movies/now-playing" ? "active" : ""
          }`}
        >
          Now playing
        </NavLink>
      </div>
    </div>
  );
};
