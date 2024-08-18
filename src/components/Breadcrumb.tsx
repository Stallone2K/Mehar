import { Link } from "react-router-dom";

function Breadcrumb() {
  return (
    <div>
      <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap justify-center sticky top-0 z-20 md:justify-center md:px-4 lg:px-6 xl:px-8 mt-4">
        <Link to="/Services" className="text-gray-900 ">
          Overview
        </Link>

        <span className="mx-2 md:mx-4 text-gray-900 rtl:-scale-x-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 md:w-5 md:h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </span>

        <Link
          to="/Services/Clients"
          className="flex items-center text-gray-900 text-sm md:text-base -px-2 hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 md:w-6 md:h-6 mx-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>

          <span className="mx-2 text-sm md:text-base">For Clients</span>
        </Link>

        <span className="mx-2 md:mx-4 text-gray-500 rtl:-scale-x-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 md:w-5 md:h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </span>

        <Link
          to="/Services/Candidates"
          className="flex items-center text-gray-900 text-sm md:text-base -px-2 hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 md:w-6 md:h-6 mx-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
            />
          </svg>

          <span className="mx-2 text-sm md:text-base">For Candidates</span>
        </Link>
      </div>
    </div>
  );
}

export default Breadcrumb;
