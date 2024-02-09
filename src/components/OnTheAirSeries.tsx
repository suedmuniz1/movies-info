import { MoviesAndSeriesDataList } from "./MoviesAndSeriesDataList";
import { SeriesNavBar } from "./SeriesNavBar";

export const OnTheAirSeries = () => {
  return (
    <div>
      <SeriesNavBar />

      <MoviesAndSeriesDataList
        // title="Upcoming Movies"
        // customTitleKey="title"
        dataEndpoint="https://api.themoviedb.org/3/tv/on_the_air"
      />
    </div>
  );
};
