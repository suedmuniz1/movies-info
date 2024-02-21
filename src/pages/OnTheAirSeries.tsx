import { DataList } from "../components/DataList";

export const OnTheAirSeries = () => {
  return (
    <div>
      <DataList
        dataEndpoint="https://api.themoviedb.org/3/tv/on_the_air"
        itemType="tv"
      />
    </div>
  );
};
