import { MoviesAndSeriesDataList } from "../components/MoviesAndSeriesDataList";
import { MoviesNavBar } from "../components/MoviesNavBar";

export const NowPlayingMovies = () => {
  return (
    <div>
      <MoviesNavBar />

      <MoviesAndSeriesDataList dataEndpoint="https://api.themoviedb.org/3/movie/now_playing" />
    </div>
  );
};
