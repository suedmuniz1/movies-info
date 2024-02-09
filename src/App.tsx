import { Navigate, Route, Routes } from "react-router";
import { Header } from "./components/Header";
import { UpcomingMovies } from "./components/UpcomingMovies";
import { SeriesOnTheAir } from "./components/SeriesOnTheAir";

function App() {
  return (
    <div
      id="root"
      className="bg-cyan-200 font-sans"
      style={{ minHeight: "100vh" }}
    >
      <div className="bg-cyan-950 text-white">
        <Header />
      </div>
      <div
        className="w-3/4 mx-auto bg-white p-10"
        style={{ minHeight: "80vh" }}
      >
        <Routes>
          <Route path="/" element={<UpcomingMovies />} />
          <Route path="/series" element={<SeriesOnTheAir />} />
        </Routes>
        {/* <Routes>
          <Route path="/">
            <Route index element={<Navigate to="/movies/upcoming" replace />} />
            <Route path="/movies">
              <Route path="/movies/upcoming" element={<UpcomingMovies />} />
            </Route>
          </Route>
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
