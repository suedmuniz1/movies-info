import { MoviesAndSeriesDataList } from "../components/MoviesAndSeriesDataList";

export const TopRatedSeries = () => {
  return (
    <div>
      <MoviesAndSeriesDataList
        dataEndpoint="https://api.themoviedb.org/3/tv/top_rated"
        itemType="tv"
      />
    </div>
  );
};
