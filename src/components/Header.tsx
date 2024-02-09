export const Header = () => {
  return (
    <div
      id="header-container"
      className="w-3/4 mx-auto px-5 py-4 flex justify-between items-center"
    >
      <button id="logo" className="text-3xl font-bold">
        Movies List
      </button>
      <div id="nav-items" className="text-lg">
        <button className="ml-10">Movies</button>
        <button className="ml-10">Series</button>
        <button className="ml-20">Project</button>
      </div>
    </div>
  );
};
