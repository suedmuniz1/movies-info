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
  return (
    <nav className="flex justify-center mt-10">
      <div className="flex justify-evenly w-3/6 py-5 border-t-2 border-cyan-600 border-opacity-20">
        <button
          onClick={() => {
            setPage(1);
            window.scrollTo(0, 0);
          }}
          disabled={page === 1}
          className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-lg text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          First page
        </button>
        <ul className="flex justify-center -space-x-px text-lg h-10">
          <li>
            <button
              onClick={() => {
                setPage(page - 1);
                window.scrollTo(0, 0);
              }}
              disabled={page === 1}
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </button>
          </li>
          {page > 1 && (
            <li>
              <button
                onClick={() => {
                  setPage(page - 1);
                  window.scrollTo(0, 0);
                }}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {page - 1}
              </button>
            </li>
          )}
          <li>
            <button className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
              {page}
            </button>
          </li>
          {page < totalPages && totalResults > 0 && (
            <li>
              <button
                onClick={() => {
                  setPage(page + 1);
                  window.scrollTo(0, 0);
                }}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
              disabled={page === totalPages || totalResults === 0}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </button>
          </li>
        </ul>
        <button
          onClick={() => {
            setPage(totalPages);
            window.scrollTo(0, 0);
          }}
          disabled={page === totalPages || totalResults === 0}
          className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-lg text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Last page
        </button>
      </div>
    </nav>
  );
};
