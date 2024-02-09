import { MoviesAndSeriesDataList } from "./MoviesAndSeriesDataList";

export const SeriesOnTheAir = () => {
  return (
    <MoviesAndSeriesDataList
      title="Series On The Air"
      customTitleKey="name"
      dataEndpoint="https://api.themoviedb.org/3/tv/on_the_air"
    />
  );
};
