import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { SeriesNavBar } from "../components/SeriesNavBar";

export const SeriesLayout = () => {
  return (
    <div className="text-white">
      <Header />
      <div className="my-10">
        <SeriesNavBar />
        <Outlet />
      </div>
    </div>
  );
};
