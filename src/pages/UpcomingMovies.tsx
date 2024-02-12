import { MoviesAndSeriesDataList } from "../components/MoviesAndSeriesDataList";

export const UpcomingMovies = () => {
  return (
    <div>
      <MoviesAndSeriesDataList
        dataEndpoint="https://api.themoviedb.org/3/movie/upcoming"
        itemType="movie"
      />
    </div>
  );
};
