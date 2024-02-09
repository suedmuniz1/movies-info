import { MoviesAndSeriesDataList } from "./MoviesAndSeriesDataList";
import { MoviesNavBar } from "./MoviesNavBar";

export const UpcomingMovies = () => {
  return (
    <div>
      <MoviesNavBar />

      <MoviesAndSeriesDataList
        // title="Upcoming Movies"
        // customTitleKey="title"
        dataEndpoint="https://api.themoviedb.org/3/movie/upcoming"
      />
    </div>
  );
};
