import { useEffect, useState } from "react";
import { getData } from "../services/api/api";
import { ItemCard, ItemTypeProps } from "./ItemCard";
import { Pagination } from "./Pagination";
import { useTranslation } from "react-i18next";

type DataListProps = {
  // title: string;
  customTitleKey?: string;
  dataEndpoint: string;
  endpointParams?: Record<string, any>;
  itemType: ItemTypeProps;
};

export const DataList: React.FC<DataListProps> = ({
  // title,
  customTitleKey,
  dataEndpoint,
  endpointParams = {},
  itemType,
}) => {
  const [items, setItems] = useState<Record<string, any>[]>([]);
  const [page, setPage] = useState<number>(localStorage.getItem("currentPage") ? Number(localStorage.getItem("currentPage")) : 1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { i18n } = useTranslation();

  const getMovies = async () => {
    localStorage.setItem("currentPage", String(page));

    const response = await getData({
      dataEndpoint,
      endpointParams,
      page,
      language: i18n.language,
    });

    setItems(response.results);
    setPage(response.page);
    setTotalPages(response.total_pages);
    setTotalResults(response.total_results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, [page, i18n.language]);

  return (
    <div className="h-full w-full my-10 rounded-3xl bg-opacity-90">
      {isLoading ? (
        <div className="w-full text-center text-white">
          <span>Loading...</span>
        </div>
      ) : (
        <>
          <div>
            {items && items.length > 0 && (
              <div className="grid grid-rows-5 grid-cols-4 grid-flow-row gap-4 my-10">
                {items.map((Item: any) => {
                  return (
                    <ItemCard
                      key={Item.id}
                      id={Item.id}
                      title={Item[customTitleKey ?? "title" ?? "name"]}
                      overview={Item.overview}
                      posterPath={Item.poster_path}
                      itemType={itemType}
                    />
                  );
                })}
              </div>
            )}
            {items && items.length < 1 && (
              <div className="flex justify-center my-10">
                <span>No items found.</span>
              </div>
            )}
          </div>
          <Pagination
            page={page}
            setPage={setPage}
            totalPages={totalPages}
            totalResults={totalResults}
          />
        </>
      )}
    </div>
  );
};
