import { NavLink, useLocation } from "react-router-dom";
import "./SeriesNavBar.css";

export const SeriesNavBar = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-full flex justify-center">
      <div className="w-2/4 flex justify-evenly">
        <NavLink
          to="/series/popular"
          className={`text-cyan-800 font-bold text-2xl transition ease delay-150 hover:text-cyan-300 hover:-translate-y-1 hover:scale-110 duration-300 ${
            pathname === "/series/popular" ? "active" : ""
          }`}
        >
          Popular
        </NavLink>
        <NavLink
          to="/series/top-rated"
          className={`text-cyan-800 font-bold text-2xl transition ease delay-150 hover:text-cyan-300 hover:-translate-y-1 hover:scale-110 duration-300 ${
            location.pathname === "/series/top-rated" ? "active" : ""
          }`}
        >
          Top rated
        </NavLink>
        <NavLink
          to="/series/on-the-air"
          className={`text-cyan-800 font-bold text-2xl transition ease delay-150 hover:text-cyan-300 hover:-translate-y-1 hover:scale-110 duration-300 ${
            pathname === "series/on-the-air" ? "active" : ""
          }`}
        >
          On the air
        </NavLink>
      </div>
    </div>
  );
};
