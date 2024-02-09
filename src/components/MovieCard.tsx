import { NavLink } from "react-router-dom";
import "./MovieCard.css";

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
    <div className="w-full image-container">
      <img
        src={`https://image.tmdb.org/t/p/w300${posterPath}`}
        alt="movie-poster"
        className="w-full h-full"
      />
      <div className="text-white p-5 overlay">
        <span className="text-3xl font-bold mb-10">{title}</span>
        <span className="text-justify">{formatOverview(overview)}</span>
        <div className="flex justify-center">
          <NavLink
            to="/teste"
            className="font-bold p-5 mt-5 hover:underline hover:text-cyan-600 transition ease delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <button>See more</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
