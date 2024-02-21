import { DataList } from "../components/DataList";

export const NowPlayingMovies = () => {
  return (
    <div>
      <DataList
        dataEndpoint="https://api.themoviedb.org/3/movie/now_playing"
        itemType="movie"
      />
    </div>
  );
};
