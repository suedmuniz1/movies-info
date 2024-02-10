import { seriesOptions } from "../constants/seriesNavBar";
import "./SeriesNavBar.css";
import { SubMenusNavOption } from "./SubMenusNavOption";

export const SeriesNavBar = () => {
  return (
    <div className="text-white flex">
      {seriesOptions.map(({ name, path }) => {
        return <SubMenusNavOption name={name} path={path} />;
      })}
    </div>
  );
};
