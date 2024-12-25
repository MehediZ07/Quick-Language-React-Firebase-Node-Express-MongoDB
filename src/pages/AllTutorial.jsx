import { useEffect, useState } from "react";

import axios from "axios";
import TutorialCard from "../components/TutorialCard";
import { useParams } from "react-router-dom";

export default function AllTutorial() {
  const { category } = useParams();
  const [tutorial, setTutorial] = useState([]);
  const [filter, setFilter] = useState(category || "");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchAllTutorial = async () => {
      try {
        const { data } = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/all-tutors?filter=${filter}&search=${search}&sort=${sort}&page=${currentPage}&size=${itemsPerPage}`
        );

        setTutorial(data.result);
        setCount(data.totalCount);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchAllTutorial();
  }, [filter, search, currentPage, sort, itemsPerPage]);

  const handleReset = () => {
    setFilter("");
    setSearch("");
    setSort("");
    setCurrentPage(0);
    setItemsPerPage(10);
  };

  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value, 10);
    setItemsPerPage(val);
    setCurrentPage(0);
  };

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  return (
    <div className="max-w-7xl   py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between">
      <div>
        <div className=" grid grid-cols-3 px-6 md:grid-cols-6  justify-center items-center gap-5 max-w-7xl mx-auto">
          <select
            name="category"
            id="category"
            className="border p-4 rounded-lg"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          >
            <option value="">Filter By Category</option>
            <option value="Bangla">Bangla</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="Italian">Italian</option>
            <option value="Chinese">Chinese</option>
            <option value="German">German</option>
            <option value="Arabic">Arabic</option>
            <option value="Japanese">Japanese</option>
            <option value="Spanish">Spanish</option>
          </select>

          <div
            className="col-span-2 md:col-span-2 -order-2 md:order-none"
            onChange={(e) => setSearch(e.target.value)}
          >
            <div className="flex justify-between  p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300 w-full">
              <input
                className="px-6 py-2 w-full text-gray-700 placeholder-gray-500  outline-none focus:placeholder-transparent"
                type="text"
                name="search"
                placeholder="Enter Job Title"
                aria-label="Enter Job Title"
              />

              <button className="px-1  md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-[#8A2BE280] rounded-md hover:bg-[#007BFF80] focus:bg-[#007BFF80] focus:outline-none">
                Search
              </button>
            </div>
          </div>

          <select
            name="sort"
            id="sort"
            onChange={(e) => setSort(e.target.value)}
            className="border p-4 rounded-md dropdown-end"
            value={sort}
          >
            <option value="">Sort By</option>
            <option value="asc">Price: Low to High</option>
            <option value="dsc">Price: High to Low</option>
          </select>

          {/* Items Per Page */}
          <select
            name="itemsPerPage"
            id="itemsPerPage"
            onChange={(e) => handleItemsPerPage(e)}
            className="border p-4 rounded-md"
            value={itemsPerPage}
          >
            <option value={5}>5</option>
            <option value={8}>8</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
          <button
            onClick={handleReset}
            className="btn text-white text-lg font-normal -order-1 bg-[#8A2BE280] hover:bg-[#007BFF80] md:order-none"
          >
            Reset
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {tutorial.map((data, index) => (
            <TutorialCard key={data._id} data={data} index={index} />
          ))}
        </div>
      </div>

      {/* Pagination Section */}
      <div className="flex items-center mt-6 justify-center gap-2">
        <button
          className={`${
            currentPage === 0
              ? "px-4 py-2 text-sm font-medium text-gray-500 bg-gray-300 rounded-full cursor-not-allowed"
              : "px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600"
          }`}
          onClick={() => currentPage > 0 && setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 0}
        >
          Prev
        </button>

        {pages.map((page) => (
          <button
            key={page}
            className={`${
              currentPage === page
                ? "px-4 py-2 text-sm font-bold text-white bg-green-500 rounded-full shadow-md transform scale-105 border border-green-700"
                : "px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-full shadow-md hover:bg-gray-300"
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page + 1}
          </button>
        ))}

        <button
          className={`${
            currentPage === pages.length - 1
              ? "px-4 py-2 text-sm font-medium text-gray-500 bg-gray-300 rounded-full cursor-not-allowed"
              : "px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600"
          }`}
          onClick={() =>
            currentPage < pages.length - 1 && setCurrentPage((prev) => prev + 1)
          }
          disabled={currentPage === pages.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
