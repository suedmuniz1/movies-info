import { DataList } from "../components/DataList";

export const TopRatedMovies = () => {
  return (
    <div>
      <DataList
        dataEndpoint="https://api.themoviedb.org/3/movie/top_rated"
        itemType="movie"
      />
    </div>
  );
};
