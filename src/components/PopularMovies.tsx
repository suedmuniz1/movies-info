import { MoviesAndSeriesDataList } from "./MoviesAndSeriesDataList";
import { MoviesNavBar } from "./MoviesNavBar";

export const PopularMovies = () => {
  return (
    <div>
      <MoviesNavBar />

      <MoviesAndSeriesDataList
        // title="Popular Movies"
        // customTitleKey="title"
        dataEndpoint="https://api.themoviedb.org/3/movie/popular"
      />
    </div>
  );
};
