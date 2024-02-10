import { MoviesAndSeriesDataList } from "../components/MoviesAndSeriesDataList";
import { MoviesNavBar } from "../components/MoviesNavBar";

export const PopularMovies = () => {
  return (
    <div>
      <MoviesNavBar />

      <MoviesAndSeriesDataList dataEndpoint="https://api.themoviedb.org/3/movie/popular" />
    </div>
  );
};
