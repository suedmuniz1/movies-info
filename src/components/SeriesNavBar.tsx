import { seriesOptions } from "../constants/seriesNavBar";
import "./SeriesNavBar.css";
import { SubMenusNavOption } from "./SubMenusNavOption";

export const SeriesNavBar = () => {
  return (
    <div className="text-white flex">
      {seriesOptions.map(({ name, path }) => {
        return <SubMenusNavOption key={name} name={name} path={path} />;
      })}
    </div>
  );
};
