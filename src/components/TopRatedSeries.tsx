import { MoviesAndSeriesDataList } from "./MoviesAndSeriesDataList";
import { SeriesNavBar } from "./SeriesNavBar";

export const TopRatedSeries = () => {
  return (
    <div>
      <SeriesNavBar />

      <MoviesAndSeriesDataList
        // title="Upcoming Movies"
        // customTitleKey="title"
        dataEndpoint="https://api.themoviedb.org/3/tv/top_rated"
      />
    </div>
  );
};
