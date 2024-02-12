import { MoviesAndSeriesDataList } from "../components/MoviesAndSeriesDataList";

export const PopularMovies = () => {
  return (
    <div>
      <MoviesAndSeriesDataList
        dataEndpoint="https://api.themoviedb.org/3/movie/popular"
        itemType="movie"
      />
    </div>
  );
};
