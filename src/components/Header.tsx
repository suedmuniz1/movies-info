import { Navbar } from "./NavBar";

export const Header = () => {
  return (
    <div
      id="header-container"
      className="mx-auto h-16 flex justify-between items-center"
    >
      <button
        id="logo"
        className="text-3xl font-bold flex justify-center items-center gap-2"
      >
        <img src="/my-movies-list-icon.png" alt="Logo" className="w-12 h-12" />
        My movies list
      </button>
      <Navbar />
    </div>
  );
};
