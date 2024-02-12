import { useTranslation } from "react-i18next";
import { MAX_API_ACCEPTED_PAGE } from "../constants/pagination";

type PaginationProps = {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
  totalResults: number;
};

export const Pagination: React.FC<PaginationProps> = ({
  page,
  setPage,
  totalPages,
  totalResults,
}) => {
  const { t } = useTranslation();

  const validatePage = () => {
    if (totalPages > MAX_API_ACCEPTED_PAGE) {
      return page < MAX_API_ACCEPTED_PAGE;
    }

    return page < totalPages;
  };

  return (
    <nav className="flex justify-center items-center mt-20">
      <div className="flex justify-evenly w-3/6">
        <button
          onClick={() => {
            setPage(1);
            window.scrollTo(0, 0);
          }}
          disabled={page === 1}
          className="flex items-center justify-center px-4 py-5 h-8 ms-0 leading-tight text-lg text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          {t("components.pagination.firstPage")}
        </button>
        <ul className="flex justify-center -space-x-px text-lg h-10">
          <li>
            <button
              onClick={() => {
                setPage(page - 1);
                window.scrollTo(0, 0);
              }}
              disabled={page === 1}
              className="flex items-center justify-center px-4 py-5 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {t("components.pagination.previousPage")}
            </button>
          </li>
          {page > 1 && (
            <li>
              <button
                onClick={() => {
                  setPage(page - 1);
                  window.scrollTo(0, 0);
                }}
                className="flex items-center justify-center px-4 py-5 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {page - 1}
              </button>
            </li>
          )}
          <li>
            <button className="flex items-center justify-center px-4 py-5 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
              {page}
            </button>
          </li>
          {validatePage() && totalResults > 0 && (
            <li>
              <button
                onClick={() => {
                  setPage(page + 1);
                  window.scrollTo(0, 0);
                }}
                className="flex items-center justify-center px-4 py-5 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {page + 1}
              </button>
            </li>
          )}
          <li>
            <button
              onClick={() => {
                setPage(page + 1);
                window.scrollTo(0, 0);
              }}
              disabled={page === MAX_API_ACCEPTED_PAGE || totalResults === 0}
              className="flex items-center justify-center px-4 py-5 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {t("components.pagination.nextPage")}
            </button>
          </li>
        </ul>
        <button
          // Setting value as 500 because the api accepts up to 500 pages
          onClick={() => {
            setPage(totalPages <= MAX_API_ACCEPTED_PAGE ? totalPages : 500);
            window.scrollTo(0, 0);
          }}
          disabled={page === MAX_API_ACCEPTED_PAGE || totalResults === 0}
          className="flex items-center justify-center px-4 py-5 h-8 ms-0 leading-tight text-lg text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          {t("components.pagination.lastPage")}
        </button>
      </div>
    </nav>
  );
};
