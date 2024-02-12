import { Button } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useLoaderData, useNavigate } from "react-router";

export const ItemDetails = () => {
  const item: any = useLoaderData();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="text-white my-10">
      <Button className="p-2" onClick={() => navigate(-1)}>
        <HiOutlineArrowLeft className="mr-2 h-5 w-5" />
        {t("components.itemDetails.goBack")}
      </Button>
      <div className="flex justify-center items-center flex-col">
        <img
          src={`https://image.tmdb.org/t/p/w300${item?.poster_path}`}
          alt="movie-poster"
        />
        <div className="text-3xl my-10 font-bold">
          {item?.title ?? item.name}
        </div>
      </div>

      <div id="details" className="mb-20">
        <div className="text-justify mb-10">
          <strong>{t("components.itemDetails.overview")}: </strong>
          <div>{item?.overview}</div>
        </div>

        <div className="text-justify mb-10">
          <strong>{t("components.itemDetails.genres")}: </strong>
          <div>{item?.genres?.map((genre: any) => genre.name).join(", ")}</div>
        </div>

        {item?.release_date && (
          <div>
            <strong>{t("components.itemDetails.releaseDate")}: </strong>{" "}
            {new Date(item?.release_date).toLocaleDateString()}
          </div>
        )}

        {item?.first_air_date && (
          <div>
            <strong>{t("components.itemDetails.firstAirDate")}: </strong>{" "}
            {new Date(item?.first_air_date).toLocaleDateString()}
          </div>
        )}
      </div>
    </div>
  );
};
