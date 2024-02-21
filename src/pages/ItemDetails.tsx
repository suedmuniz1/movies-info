import { Button, Tooltip } from "flowbite-react";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useNavigate, useParams } from "react-router";
import { ItemType, getDataById, getWatchProvidersByMovieId } from "../services/api/api";

type ItemDetailsProps = {
  itemType?: ItemType;
}

export const ItemDetails: React.FC<ItemDetailsProps> = ({ itemType = "movie" }) => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [movieData, setMovieData] = useState<Record<string, any>>();
  const [watchProviders, setWatchProviders] = useState<Record<string, any> | undefined>([]);

  const getMovieData = useCallback(async (id: string | undefined,
    itemType: ItemType,
    language: string) => {
    if (!id) return;
    const data = await getDataById(id, itemType, language);
    setMovieData(data);
  }, [i18n.language]);

  const getWatchProviders = useCallback(async (id: string | undefined,
    itemType: ItemType,
    language: string) => {
    if (!id) return;
    const data = await getWatchProvidersByMovieId(id, itemType, language);
    setWatchProviders(data);
  }, [i18n.language]);

  useEffect(() => {
    getMovieData(id, itemType, i18n.language);
    getWatchProviders(id, itemType, i18n.language);
  }, [getMovieData, getWatchProviders]);

  return (
    <div className="text-white my-10">
      <Button className="p-2" onClick={() => navigate(-1)}>
        <HiOutlineArrowLeft className="mr-2 h-5 w-5" />
        {t("components.itemDetails.goBack")}
      </Button>
      <div className="flex justify-center items-center flex-col">
        <img
          src={`https://image.tmdb.org/t/p/w300${movieData?.poster_path}`}
          alt="movie-poster"
        />
        <div className="text-3xl my-10 font-bold">
          {movieData?.title ?? movieData?.name}
        </div>
      </div>

      <div id="details" className="mb-20">
        <div className="text-justify mb-10">
          <strong>{t("components.itemDetails.overview")}: </strong>
          <div>{movieData?.overview?.length > 0 ? movieData?.overview : t("components.itemDetails.noDescriptionAvailable")}</div>
        </div>

        <div className="text-justify mb-10">
          <strong>{t("components.itemDetails.genres")}: </strong>
          <div>{movieData?.genres?.map((genre: any) => genre.name).join(", ")}</div>
        </div>

        <div className="mb-10">
          <strong>{t("components.itemDetails.whereToWatch")}: </strong>
          <div className="flex items-center gap-10 mt-5">
            {watchProviders && watchProviders.length > 0 ? (
              watchProviders?.map(({ provider_name, logo_path }: any) => {
                return (
                  <Tooltip content={provider_name} animation="duration-500" arrow={false}>
                    <img
                      key={logo_path}
                      src={`https://image.tmdb.org/t/p/w300${logo_path}`}
                      alt={provider_name}
                      className="w-20 h-20 rounded-full"
                      data-tooltip-target="tooltip-default"
                    />
                  </Tooltip>
                );
              })
            ) : (
              <div>{t("components.itemDetails.noOptionsAvailable")}</div>
            )}
          </div>
        </div>

        {movieData?.release_date && (
          <div>
            <strong>{t("components.itemDetails.releaseDate")}: </strong>{" "}
            {new Date(movieData?.release_date).toLocaleDateString()}
          </div>
        )}

        {movieData?.first_air_date && (
          <div>
            <strong>{t("components.itemDetails.firstAirDate")}: </strong>{" "}
            {new Date(movieData?.first_air_date).toLocaleDateString()}
          </div>
        )}
      </div>
    </div>
  );
};
