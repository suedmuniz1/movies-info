import { MoviesAndSeriesDataList } from "../components/DataList";

export const PopularSeries = () => {
  return (
    <div>
      <MoviesAndSeriesDataList
        dataEndpoint="https://api.themoviedb.org/3/tv/popular"
        itemType="tv"
      />
    </div>
  );
};
