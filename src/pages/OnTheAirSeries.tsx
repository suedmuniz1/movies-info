import { MoviesAndSeriesDataList } from "../components/MoviesAndSeriesDataList";
import { SeriesNavBar } from "../components/SeriesNavBar";

export const OnTheAirSeries = () => {
  return (
    <div>
      <SeriesNavBar />

      <MoviesAndSeriesDataList dataEndpoint="https://api.themoviedb.org/3/tv/on_the_air" />
    </div>
  );
};
