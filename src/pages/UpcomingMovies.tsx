import { MoviesAndSeriesDataList } from "../components/MoviesAndSeriesDataList";
import { MoviesNavBar } from "../components/MoviesNavBar";

export const UpcomingMovies = () => {
  return (
    <div>
      <MoviesNavBar />

      <MoviesAndSeriesDataList dataEndpoint="https://api.themoviedb.org/3/movie/upcoming" />
    </div>
  );
};
