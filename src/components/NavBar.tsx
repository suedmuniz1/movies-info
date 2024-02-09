import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const Navbar = () => {
  return (
    <div
      id="nav-items"
      className="text-lg h-full flex items-center justify-center"
    >
      <div className="ml-10 h-3/4 flex items-center border-b-2 border-cyan-950 nav-button">
        <NavLink
          to="/"
          className="hover:text-cyan-300 transition ease delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        >
          Movies
        </NavLink>
      </div>
      <div className="ml-10 h-3/4 flex items-center border-b-2 border-cyan-950 nav-button">
        <NavLink
          to="/series"
          className="hover:text-cyan-300 transition ease delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        >
          Series
        </NavLink>
      </div>
      <button className="ml-20">Project</button>
    </div>
  );
};
