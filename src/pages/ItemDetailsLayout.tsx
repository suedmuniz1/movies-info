import { Outlet } from "react-router";
import { Header } from "../components/Header";

export const ItemDetailsLayout = () => {
  return (
    <div className="text-white">
      <Header />
      <Outlet />
    </div>
  );
};
