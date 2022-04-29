export default function Pagination(props) {
  const { total, pages, currentPage, data, path } = props;
  const getPages = () => {
    let result = [];
    for (let index = 0; index < pages; index++) {
      result.push(
        <a
          key={index}
          href={`${path}?page=${index + 1}`}
          className={` ${
            currentPage == index + 1
              ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
              : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
          }  relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
        >
          {index + 1}
        </a>
      );
    }
    return result;
  };

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href={`${path}?page=${currentPage - 1}`}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href={`${path}?page=${currentPage + 1}`}
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{data.length}</span> of{" "}
            <span className="font-medium">{total}</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            {currentPage > 1 && (
              <a
                href={`${path}?page=${currentPage - 1}`}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                {/* <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" /> */}
              </a>
            )}
            {getPages()}
            {currentPage < pages && (
              <a
                href={`${path}?page=${currentPage + 1}`}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                {/* <ChevronRightIcon className="h-5 w-5" aria-hidden="true" /> */}
              </a>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}
