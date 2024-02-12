import { MoviesAndSeriesDataList } from "../components/MoviesAndSeriesDataList";

export const OnTheAirSeries = () => {
  return (
    <div>
      <MoviesAndSeriesDataList
        dataEndpoint="https://api.themoviedb.org/3/tv/on_the_air"
        itemType="tv"
      />
    </div>
  );
};
