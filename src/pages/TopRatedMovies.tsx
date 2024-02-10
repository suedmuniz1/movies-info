import { MoviesAndSeriesDataList } from "../components/MoviesAndSeriesDataList";
import { MoviesNavBar } from "../components/MoviesNavBar";

export const TopRatedMovies = () => {
  return (
    <div>
      <MoviesNavBar />

      <MoviesAndSeriesDataList dataEndpoint="https://api.themoviedb.org/3/movie/top_rated" />
    </div>
  );
};
