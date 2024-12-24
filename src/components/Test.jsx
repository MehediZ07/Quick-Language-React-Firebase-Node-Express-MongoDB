import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Test() {
  useEffect(() => {
    // fetchAlltutor();
    fetchAlltutor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAlltutor = async () => {
    const { data: d } = await axios.get(
      `${import.meta.env.VITE_API_URL}/tutors`
    );
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/tutor?id=67681f35042d2f6df34c150d`
    );
    // const tutor = data.find((item) => item._id === id);
    console.log(d);
    console.log(data);
  };
  const designIndex = 1 % 4;

  const categories = [
    { name: "English", logo: "🗽" },
    { name: "Spanish", logo: "🌞" },
    { name: "French", logo: "🗼" },
    { name: "Italian", logo: "🏛️" },
    { name: "Chinese", logo: "🏰" },
    { name: "German", logo: "🍺" },
    { name: "Arabic", logo: "🕌" },
    { name: "Japanese", logo: "🏯" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
      {/* {categories.map((category, index) => (
        <Link
          to={`/tutorial/${category.name}`}
          key={index}
          className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-200"
        >
          <span className="text-2xl mr-3">{category.logo}</span>
          <span className="text-lg font-semibold">{category.name}</span>
        </Link>
      ))} */}
      test
    </div>
  );
}

const DesignOne = () => (
  <div className="w-64 p-4 rounded-xl bg-white shadow-lg relative overflow-hidden">
    {/* Curved Gradient Top */}
    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-orange-500 to-orange-700 rounded-br-[100px]"></div>
    {/* Icon */}
    <div className="relative z-10 flex justify-center items-center">
      <div className="text-6xl text-white">&#60;&#47;&#62;</div>
    </div>
    {/* Content */}
    <div className="relative z-10 mt-4 text-center">
      <h3 className="text-xl font-semibold text-gray-800">TITLE</h3>
      <p className="text-sm text-gray-600 mt-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
    {/* Button */}
    <div className="relative z-10 mt-6 flex justify-center">
      <button className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-700 rounded-full hover:opacity-90">
        CODE
      </button>
    </div>
  </div>
);

const DesignTwo = () => (
  <div className="w-64 p-4 rounded-2xl bg-base-100  relative overflow-hidden  border-2 solid border-gray-200">
    {/* Curved Gradient Top */}
    <div
      className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-purple-500 to-purple-800
 rounded-br-[100px]"
    ></div>
    {/* Icon */}
    <div className="relative z-10 flex justify-between items-center">
      {/* <div className="text-6xl text-white">&#60;&#47;&#62;</div> */}
      <img
        className="w-16 h-16 rounded-full object-cover "
        src="https://i.ibb.co.com/sFR07QV/OIP.jpg"
        alt=""
      />
      <h3 className="text-lg mr-6 ml-4 text-center font-semibold text-white italic">
        English Fundamental
      </h3>
    </div>
    {/* Content */}
    <div className="relative z-10 mt-4 text-center">
      <h3 className="text-xl font-semibold text-gray-800">TITLE</h3>
      <p className="text-sm text-gray-600 mt-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
    {/* Button */}
    <div className="relative z-10 mt-6 flex justify-center">
      <button className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-purple-800 rounded-full hover:opacity-90">
        CODE
      </button>
    </div>
  </div>
);

const DesignThree = () => (
  <div className="w-64 p-4 rounded-xl bg-white shadow-lg relative overflow-hidden">
    {/* Curved Gradient Top */}
    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-blue-500 to-blue-800 rounded-br-[100px]"></div>
    {/* Icon */}
    <div className="relative z-10 flex justify-center items-center mt-8">
      <div className="text-6xl text-white">&#60;&#47;&#62;</div>
    </div>
    {/* Content */}
    <div className="relative z-10 mt-4 text-center">
      <h3 className="text-xl font-semibold text-gray-800">TITLE</h3>
      <p className="text-sm text-gray-600 mt-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
    {/* Button */}
    <div className="relative z-10 mt-6 flex justify-center">
      <button
        className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r 
       from-blue-500 to-blue-800  rounded-full hover:opacity-90"
      >
        CODE
      </button>
    </div>
  </div>
);

const DesignFour = () => (
  <div className="w-64 p-4 rounded-xl bg-white shadow-lg relative overflow-hidden">
    {/* Curved Gradient Top */}
    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-green-400 to-green-700 rounded-br-[100px]"></div>
    {/* Icon */}
    <div className="relative z-10 flex justify-center items-center">
      <div className="text-6xl text-white">&#60;&#47;&#62;</div>
    </div>
    {/* Content */}
    <div className="relative z-10 mt-4 text-center">
      <h3 className="text-xl font-semibold text-gray-800">TITLE</h3>
      <p className="text-sm text-gray-600 mt-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
    {/* Button */}
    <div className="relative z-10 mt-6 flex justify-center">
      <button className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-green-400 to-green-700 rounded-full hover:opacity-90">
        CODE
      </button>
    </div>
  </div>
);
