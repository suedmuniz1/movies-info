import { DataList } from "../components/DataList";

export const UpcomingMovies = () => {
  return (
    <div>
      <DataList
        dataEndpoint="https://api.themoviedb.org/3/movie/upcoming"
        itemType="movie"
      />
    </div>
  );
};
