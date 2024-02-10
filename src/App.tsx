import { Navigate, Route, Routes } from "react-router";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NowPlayingMovies } from "./pages/NowPlayingMovies";
import { OnTheAirSeries } from "./pages/OnTheAirSeries";
import { PopularMovies } from "./pages/PopularMovies";
import { PopularSeries } from "./pages/PopularSeries";
import { TopRatedMovies } from "./pages/TopRatedMovies";
import { TopRatedSeries } from "./pages/TopRatedSeries";
import { UpcomingMovies } from "./pages/UpcomingMovies";

function App() {
  return (
    <div
      id="root"
      className="font-sans bg-gradient-to-b from-black to-sky-900"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="text-white">
        <Header />
      </div>
      <div
        className="w-3/4 mx-auto p-10 my-10 rounded-lg"
        style={{ minHeight: "90vh" }}
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
      <Footer />
    </div>
  );
}

export default App;
