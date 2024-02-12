import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { MoviesNavBar } from "../components/MoviesNavBar";

export const MoviesLayout = () => {
  return (
    <div className="text-white">
      <Header />
      <div className="my-10">
        <MoviesNavBar />
        <Outlet />
      </div>
    </div>
  );
};
