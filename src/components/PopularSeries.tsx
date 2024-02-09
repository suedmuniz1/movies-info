import { MoviesAndSeriesDataList } from "./MoviesAndSeriesDataList";
import { SeriesNavBar } from "./SeriesNavBar";

export const PopularSeries = () => {
  return (
    <div>
      <SeriesNavBar />

      <MoviesAndSeriesDataList
        // title="Upcoming Movies"
        // customTitleKey="title"
        dataEndpoint="https://api.themoviedb.org/3/tv/popular"
      />
    </div>
  );
};
