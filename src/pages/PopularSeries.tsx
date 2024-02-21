import { DataList } from "../components/DataList";

export const PopularSeries = () => {
  return (
    <div>
      <DataList
        dataEndpoint="https://api.themoviedb.org/3/tv/popular"
        itemType="tv"
      />
    </div>
  );
};
