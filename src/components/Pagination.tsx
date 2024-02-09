type PaginationProps = {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
};

export const Pagination: React.FC<PaginationProps> = ({
  page,
  setPage,
  totalPages,
}) => {
  return (
    <nav className="flex justify-center mt-10">
      <button
        onClick={() => {
          setPage(1);
          window.scrollTo(0, 0);
        }}
        disabled={page === 1}
        className="flex items-center justify-center px-3 h-8 ms-0 mr-8 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        First page
      </button>
      <ul className="flex justify-center -space-x-px text-base h-10">
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
        {page < totalPages && (
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
            disabled={page === totalPages}
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
        disabled={page === totalPages}
        className="flex items-center justify-center px-3 h-8 ms-0 ml-8 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Last page
      </button>
    </nav>
  );
};
