/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// import { Link } from 'react-router-dom'
// import { format } from 'date-fns'
const JobCard = ({ data }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <img
        src={data?.image}
        alt={data?.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">{data?.name}</h2>
        <p className="text-sm text-gray-500 mb-3">{data?.language}</p>
        <p className="text-gray-700 text-sm">{data?.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-blue-500">
            ${data?.price}
          </span>
          <span className="flex items-center text-sm text-yellow-400">
            {"★".repeat(Math.floor(data.review)) || "★"} {data?.review || 0}
          </span>
        </div>
      </div>
      <Link to={`/details/${data?._id}`}>
        <button className="w-full bg-blue-500 text-white py-2 text-sm font-semibold hover:bg-blue-600 transition duration-200">
          Buy Now
        </button>
      </Link>
    </div>
  );
};

export default JobCard;
