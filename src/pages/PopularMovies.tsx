import { MoviesAndSeriesDataList } from "../components/DataList";

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
