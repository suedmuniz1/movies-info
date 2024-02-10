import { MoviesAndSeriesDataList } from "../components/MoviesAndSeriesDataList";
import { SeriesNavBar } from "../components/SeriesNavBar";

export const PopularSeries = () => {
  return (
    <div>
      <SeriesNavBar />

      <MoviesAndSeriesDataList dataEndpoint="https://api.themoviedb.org/3/tv/popular" />
    </div>
  );
};
