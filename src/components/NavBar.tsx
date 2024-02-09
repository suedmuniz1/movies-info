import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const Navbar = () => {
  return (
    <div id="nav-items" className="text-lg">
      <NavLink to="/" className="ml-10">
        Movies
      </NavLink>
      <NavLink to="/series" className="ml-10">
        Series
      </NavLink>
      <button className="ml-20">Project</button>
    </div>
  );
};
