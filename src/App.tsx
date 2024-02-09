import axios from "axios";
import { useEffect, useState } from "react";
import { API_TOKEN } from "./constants/env";
import { Header } from "./components/Header";

import "./App.css";
import { MovieCard } from "./components/MovieCard";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const moviesList = await axios
      .get("https://api.themoviedb.org/3/movie/upcoming", {
        headers: {
          authorization: `Bearer ${API_TOKEN}`,
          accept: "application/json",
        },
        params: {
          page: 1,
          language: "en-US",
        },
      })
      .then((response) => response.data.results);

    setMovies(moviesList);
    console.log(moviesList);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div id="root" className="bg-cyan-200 h-full font-sans">
      <div className="bg-cyan-950 text-white">
        <Header />
      </div>
      <div className="w-3/4 mx-auto bg-cyan-50 p-10">
        <span className="text-3xl font-bold">Popular Movies</span>
        <div id="movies" className="flex flex-wrap justify-between">
          {movies.map((movie: any) => {
            return (
              <MovieCard
                title={movie.title}
                overview={movie.overview}
                posterPath={movie.poster_path}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
