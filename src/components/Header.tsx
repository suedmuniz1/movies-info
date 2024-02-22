import { Navbar } from "./NavBar";

export const Header = () => {
  return (
    <div
      id="header-container"
      className="flex flex-col items-start md:flex-row md:mx-auto md:h-16 md:justify-between md:items-center"
    >
      <button
        id="logo"
        className="text-3xl font-bold flex justify-center items-center gap-2 sm:text-red-500 md:text-yellow-500 lg:text-green-500"
      >
        <img src="/my-movies-list-icon.png" alt="Logo" className="w-12 h-12" />
        Cinefilando
      </button>
      <Navbar />
    </div>
  );
};
