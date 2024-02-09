import axios from "axios";
import { useEffect, useState } from "react";
import { API_TOKEN } from "./constants/env";
import { Header } from "./components/Header";
import { MovieCard } from "./components/MovieCard";
import { Pagination } from "./components/Pagination";

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const getMovies = async () => {
    const response = await axios
      .get("https://api.themoviedb.org/3/movie/upcoming", {
        headers: {
          authorization: `Bearer ${API_TOKEN}`,
          accept: "application/json",
        },
        params: {
          page: page,
          language: "en-US",
        },
      })
      .then((response) => {
        return response.data;
      });

    setMovies(response.results);
    setPage(response.page);
    setTotalPages(response.total_pages);
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  return (
    <div id="root" className="bg-cyan-200 h-full font-sans">
      <div className="bg-cyan-950 text-white">
        <Header />
      </div>
      <div className="w-3/4 mx-auto bg-white p-10">
        <span className="text-3xl font-bold">Upcoming</span>
        <div className="grid grid-rows-5 grid-cols-4 grid-flow-row gap-4 my-10">
          {movies.map((movie: any) => {
            return (
              <MovieCard
                key={movie.id}
                title={movie.title}
                overview={movie.overview}
                posterPath={movie.poster_path}
              />
            );
          })}
        </div>
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </div>
  );
}

export default App;
