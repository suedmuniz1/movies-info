import { DataList } from "../components/DataList";

export const PopularMovies = () => {
  return (
    <div>
      <DataList
        dataEndpoint="https://api.themoviedb.org/3/movie/popular"
        itemType="movie"
      />
    </div>
  );
};
