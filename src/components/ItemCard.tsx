import { NavLink } from "react-router-dom";
import "./ItemCard.css";
import { useTranslation } from "react-i18next";

export type ItemTypeProps = "movie" | "tv" | undefined;

type ItemCardProps = {
  id: number;
  title: string;
  overview: string;
  posterPath: string;
  itemType: ItemTypeProps;
};

export const ItemCard: React.FC<ItemCardProps> = ({
  id,
  title = "",
  overview = "",
  posterPath = "",
  itemType = "movie",
}) => {
  const { t } = useTranslation();

  const formatOverview = (overview: string) => {
    if (!overview) return t("components.itemCard.noDescriptionAvailable");

    if (overview.length > 180) {
      return overview.substring(0, 180) + "...";
    }
    return overview;
  };

  return (
    <div className="w-full transition ease delay-150 duration-300 hover:-translate-y-3 image-container">
      <img
        src={`https://image.tmdb.org/t/p/w300${posterPath}`}
        alt="movie-poster"
        className="w-full h-full"
      />
      <div className="text-white p-3 overlay">
        <span className="text-md xl:text-md 2xl:text-lg font-bold mb-10 sm:mb-1">{title}</span>
        <span className="text-justify">{formatOverview(overview)}</span>
        <div className="flex justify-center">
          <NavLink
            to={`/${itemType === "tv" ? "serie" : itemType}/${id}`}
            className="md:text-lg text-sm font-bold hover:underline mt-3 hover:text-cyan-600 transition ease delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <button>{t("components.itemCard.seeMore")}</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
