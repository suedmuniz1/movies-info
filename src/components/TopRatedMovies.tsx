import { MoviesAndSeriesDataList } from "./MoviesAndSeriesDataList";
import { MoviesNavBar } from "./MoviesNavBar";

export const TopRatedMovies = () => {
  return (
    <div>
      <MoviesNavBar />

      <MoviesAndSeriesDataList
        // title="Popular Movies"
        // customTitleKey="title"
        dataEndpoint="https://api.themoviedb.org/3/movie/top_rated"
      />
    </div>
  );
};
