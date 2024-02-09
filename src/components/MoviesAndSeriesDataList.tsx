import axios from "axios";
import { useEffect, useState } from "react";
import { API_TOKEN } from "../constants/env";
import { MovieCard } from "./MovieCard";
import { Pagination } from "./Pagination";
import { Loading } from "react-loading-dot";

type MoviesDataListProps = {
  // title: string;
  customTitleKey?: string;
  dataEndpoint: string;
  endpointParams?: Record<string, any>;
};

export const MoviesAndSeriesDataList: React.FC<MoviesDataListProps> = ({
  // title,
  customTitleKey,
  dataEndpoint,
  endpointParams,
}) => {
  const [movies, setMovies] = useState<Record<string, any>[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getMovies = async () => {
    const response = await axios
      .get(dataEndpoint, {
        headers: {
          authorization: `Bearer ${API_TOKEN}`,
          accept: "application/json",
        },
        params: {
          page: page,
          language: "en-US",
          ...endpointParams,
        },
      })
      .then((response) => {
        console.log(response.data);
        return response.data;
      });

    setMovies(response.results);
    setPage(response.page);
    setTotalPages(response.total_pages);
    setTotalResults(response.total_results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  return (
    <div className="h-full w-full my-20">
      {/* <div className="w-full flex justify-center">
        <span className="text-3xl font-bold">{title}</span>
      </div> */}
      {isLoading ? (
        <div className="w-full">
          <Loading background="rgba(0, 0, 0, 0.8)" />
        </div>
      ) : (
        <div>
          {movies && movies.length > 0 && (
            <div className="grid grid-rows-5 grid-cols-4 grid-flow-row gap-4 my-10">
              {movies.map((movie: any) => {
                return (
                  <MovieCard
                    key={movie.id}
                    title={movie[customTitleKey ?? "title"]}
                    overview={movie.overview}
                    posterPath={movie.poster_path}
                  />
                );
              })}
            </div>
          )}
          {movies && movies.length < 1 && (
            <div className="flex justify-center my-10">
              <span>No items found.</span>
            </div>
          )}
        </div>
      )}
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        totalResults={totalResults}
      />
    </div>
  );
};
