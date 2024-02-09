import { Navbar } from "./NavBar";

export const Header = () => {
  return (
    <div
      id="header-container"
      className="w-3/4 mx-auto px-5 py-4 flex justify-between items-center"
    >
      <button id="logo" className="text-3xl font-bold">
        Movies List
      </button>
      <Navbar />
    </div>
  );
};
