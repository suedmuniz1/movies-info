import { MoviesAndSeriesDataList } from "./MoviesAndSeriesDataList";

export const UpcomingMovies = () => {
  return (
    <MoviesAndSeriesDataList
      title="Upcoming Movies"
      customTitleKey="title"
      dataEndpoint="https://api.themoviedb.org/3/movie/upcoming"
    />
  );
};
