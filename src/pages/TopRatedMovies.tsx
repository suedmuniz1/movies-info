import { MoviesAndSeriesDataList } from "../components/DataList";

export const TopRatedMovies = () => {
  return (
    <div>
      <MoviesAndSeriesDataList
        dataEndpoint="https://api.themoviedb.org/3/movie/top_rated"
        itemType="movie"
      />
    </div>
  );
};
