import { Link } from "react-router-dom";

export default function TutorialCard({ data, index }) {
  const designIndex = index % 4;
  if (!data) return <span className="loading loading-dots loading-lg"></span>;
  return (
    <div className="w-full mx-auto">
      {designIndex === 0 && <DesignOne {...data} />}
      {designIndex === 1 && <DesignTwo {...data} />}
      {designIndex === 2 && <DesignThree {...data} />}
      {designIndex === 3 && <DesignFour {...data} />}
    </div>
  );
}

const DesignOne = ({ image, title, price, description, _id }) => (
  <div className="w-64 p-4 rounded-2xl bg-white h-[17rem] relative overflow-hidden  border-2 solid border-gray-200 mx-auto">
    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-orange-500 to-orange-700 rounded-br-[100px]"></div>

    <div className="relative z-10 flex justify-between items-center">
      <img
        className="w-16 h-16 rounded-full object-cover "
        src={image}
        alt=""
      />
      <h3 className=" -mt-2  mr-6 ml-4 text-center font-semibold text-white italic">
        {title}
      </h3>
    </div>

    <div className="relative z-10 mt-4 text-center flex flex-col items-center justify-center">
      <h3 className="px-3 py-1 text-sm text-orange-600 bg-orange-100 rounded-full w-fit mt-2 text-center">
        ${price}
      </h3>
      <p className="text-sm text-gray-600 mt-2 h-[3.7rem]">
        {description.substring(0, 80)}...
      </p>
    </div>

    <div className="relative z-10 mt-6 flex justify-center">
      <Link
        to={`/details/${_id}`}
        className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-700 rounded-full hover:opacity-90"
      >
        View Details
      </Link>
    </div>
  </div>
);

const DesignTwo = ({ image, title, price, description, _id }) => (
  <div className="w-64 p-4 rounded-2xl bg-white h-[17rem] relative overflow-hidden  border-2 solid border-gray-200 mx-auto">
    <div
      className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-purple-500 to-purple-800
   rounded-br-[100px]"
    ></div>

    <div className="relative z-10 flex justify-between items-center">
      <img
        className="w-16 h-16 rounded-full object-cover "
        src={image}
        alt=""
      />
      <h3 className="-mt-2 mr-6 ml-4 text-center font-semibold text-white italic">
        {title}
      </h3>
    </div>

    <div className="relative z-10 mt-4 text-center flex flex-col items-center justify-center">
      <h3 className="px-3 py-1 text-sm text-purple-600 bg-purple-100 rounded-full w-fit mt-2 text-center">
        ${price}
      </h3>
      <p className="text-sm text-gray-600 mt-2 h-[3.7rem]">
        {description.substring(0, 80)}...
      </p>
    </div>

    <div className="relative z-10 mt-6 flex justify-center">
      <Link
        to={`/details/${_id}`}
        className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-purple-800 rounded-full hover:opacity-90"
      >
        View Details
      </Link>
    </div>
  </div>
);

const DesignThree = ({ image, title, price, description, _id }) => (
  <div className="w-64 p-4 rounded-2xl bg-white h-[17rem] relative overflow-hidden  border-2 solid border-gray-200 mx-auto">
    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-blue-500 to-blue-800 rounded-br-[100px]"></div>

    <div className="relative z-10 flex justify-between items-center">
      <img
        className="w-16 h-16 rounded-full object-cover "
        src={image}
        alt=""
      />
      <h3 className="-mt-2 mr-6 ml-4 text-center font-semibold text-white italic">
        {title}
      </h3>
    </div>

    <div className="relative z-10 mt-4 text-center flex flex-col items-center justify-center">
      <h3 className="px-3 py-1 text-sm text-blue-600 bg-blue-100 rounded-full w-fit mt-2 text-center">
        ${price}
      </h3>
      <p className="text-sm text-gray-600 mt-2 h-[3.7rem]">
        {description.substring(0, 80)}...
      </p>
    </div>

    <div className="relative z-10 mt-6 flex justify-center">
      <Link
        to={`/details/${_id}`}
        className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r 
         from-blue-500 to-blue-800  rounded-full hover:opacity-90"
      >
        View Details
      </Link>
    </div>
  </div>
);

const DesignFour = ({ image, title, price, description, _id }) => (
  <div className="w-64 p-4 rounded-2xl bg-white h-[17rem] relative overflow-hidden  border-2 solid border-gray-200 mx-auto">
    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-green-400 to-green-700 rounded-br-[100px]"></div>

    <div className="relative z-10 flex justify-between items-center">
      <img
        className="w-16 h-16 rounded-full object-cover "
        src={image}
        alt=""
      />
      <h3 className="-mt-2 mr-6 ml-4 text-center font-semibold text-white italic">
        {title}
      </h3>
    </div>

    <div className="relative z-10 mt-4 text-center flex flex-col items-center justify-center">
      <h3 className="px-3 py-1 text-sm text-green-600 bg-green-100 rounded-full w-fit mt-2 text-center">
        ${price}
      </h3>
      <p className="text-sm text-gray-600 mt-2 h-[3.7rem]">
        {description.substring(0, 80)}...
      </p>
    </div>

    <div className="relative z-10 mt-6 flex justify-center">
      <Link
        to={`/details/${_id}`}
        className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-green-400 to-green-700 rounded-full hover:opacity-90"
      >
        View Details
      </Link>
    </div>
  </div>
);
