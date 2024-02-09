type MovieCardProps = {
  title: string;
  overview: string;
  posterPath: string;
};

export const MovieCard: React.FC<MovieCardProps> = ({
  title = "",
  overview,
  posterPath = "",
}) => {
  const formatOverview = (overview: string) => {
    if (!overview) return "No description available.";

    if (overview.length > 200) {
      return overview.substring(0, 200) + "...";
    }
    return overview;
  };

  return (
    <div className="my-5 w-max h-max bg-cyan-700 p-1 rounded-3xl image-container">
      <img
        src={`https://image.tmdb.org/t/p/w300${posterPath}`}
        alt="movie-poster"
        className="rounded-3xl"
      />
      <div className="text-white rounded-3xl p-5 overlay">
        <span className="text-3xl font-bold mb-10">{title}</span>
        <span className="text-justify">{formatOverview(overview)}</span>
      </div>
    </div>
  );
};
