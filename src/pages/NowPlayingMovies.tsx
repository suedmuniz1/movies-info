import { MoviesAndSeriesDataList } from "../components/MoviesAndSeriesDataList";

export const NowPlayingMovies = () => {
  return (
    <div>
      <MoviesAndSeriesDataList
        dataEndpoint="https://api.themoviedb.org/3/movie/now_playing"
        itemType="movie"
      />
    </div>
  );
};
