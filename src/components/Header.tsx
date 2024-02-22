import { Navbar } from "./NavBar";

export const Header = () => {
  return (
    <div
      id="header-container"
      className="flex flex-col items-start md:flex-row md:mx-auto md:h-16 md:justify-between md:items-center"
    >
      <button
        id="logo"
        className="text-3xl font-bold flex justify-center items-center gap-2 text-sm md:text-lg lg:text-xl"
      >
        <img src="/my-movies-list-icon.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
        Cinefilando
      </button>
      <Navbar />
    </div>
  );
};
