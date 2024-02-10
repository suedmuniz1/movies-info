import { Navigate, Route, Routes } from "react-router";
import { Header } from "./components/Header";
import { UpcomingMovies } from "./pages/UpcomingMovies";
import { PopularMovies } from "./pages/PopularMovies";
import { TopRatedMovies } from "./pages/TopRatedMovies";
import { NowPlayingMovies } from "./pages/NowPlayingMovies";
import { PopularSeries } from "./pages/PopularSeries";
import { TopRatedSeries } from "./pages/TopRatedSeries";
import { OnTheAirSeries } from "./pages/OnTheAirSeries";

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
          <Route path="/">
            <Route index element={<Navigate to="/movies/popular" replace />} />
            <Route path="/movies/popular" element={<PopularMovies />} />
            <Route path="/movies/upcoming" element={<UpcomingMovies />} />
            <Route path="/movies/top-rated" element={<TopRatedMovies />} />
            <Route path="/movies/now-playing" element={<NowPlayingMovies />} />
            <Route path="/series/popular" element={<PopularSeries />} />
            <Route path="/series/top-rated" element={<TopRatedSeries />} />
            <Route path="/series/on-the-air" element={<OnTheAirSeries />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
