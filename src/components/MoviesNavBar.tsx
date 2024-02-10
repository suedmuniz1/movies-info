import { moviesOptions } from "../constants/moviesNavBar";
import "./MoviesNavBar.css";
import { SubMenusNavOption } from "./SubMenusNavOption";

export const MoviesNavBar = () => {
  return (
    <div className="text-white flex">
      {moviesOptions.map(({ name, path }) => {
        return <SubMenusNavOption name={name} path={path} />;
      })}
    </div>
  );
};
