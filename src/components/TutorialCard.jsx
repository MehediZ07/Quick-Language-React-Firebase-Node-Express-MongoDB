export default function TutorialCard({ data, index }) {
  const designIndex = index % 4;
  console.log(data);
  return (
    <div>
      {designIndex === 0 && <DesignOne {...data} />}
      {designIndex === 1 && <DesignTwo {...data} />}
      {designIndex === 2 && <DesignThree {...data} />}
      {designIndex === 3 && <DesignFour {...data} />}
    </div>
  );
}

const DesignOne = ({ image, title, price, description }) => (
  <div className="w-64 p-4 rounded-xl bg-white shadow-lg relative overflow-hidden">
    {/* Curved Gradient Top */}
    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-orange-500 to-orange-700 rounded-br-[100px]"></div>
    {/* Icon */}
    <div className="relative z-10 flex justify-between items-center">
      {/* <div className="text-6xl text-white">&#60;&#47;&#62;</div> */}
      <img
        className="w-16 h-16 rounded-full object-cover "
        src={image}
        alt=""
      />
      <h3 className="text-lg mr-6 ml-4 text-center font-semibold text-white italic">
        {title}
      </h3>
    </div>
    {/* Content */}
    <div className="relative z-10 mt-4 text-center">
      <h3 className="text-xl font-semibold text-gray-800">${price}</h3>
      <p className="text-sm text-gray-600 mt-2">
        {description.substring(0, 100)}...
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

const DesignTwo = ({ image, title, price, description }) => (
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
        src={image}
        alt=""
      />
      <h3 className="text-lg mr-6 ml-4 text-center font-semibold text-white italic">
        {title}
      </h3>
    </div>
    {/* Content */}
    <div className="relative z-10 mt-4 text-center">
      <h3 className="text-xl font-semibold text-gray-800">${price}</h3>
      <p className="text-sm text-gray-600 mt-2">
        {description.substring(0, 80)}...
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

const DesignThree = ({ image, title, price, description }) => (
  <div className="w-64 p-4 rounded-xl bg-white shadow-lg relative overflow-hidden">
    {/* Curved Gradient Top */}
    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-blue-500 to-blue-800 rounded-br-[100px]"></div>
    {/* Icon */}
    <div className="relative z-10 flex justify-between items-center">
      {/* <div className="text-6xl text-white">&#60;&#47;&#62;</div> */}
      <img
        className="w-16 h-16 rounded-full object-cover "
        src={image}
        alt=""
      />
      <h3 className="text-lg mr-6 ml-4 text-center font-semibold text-white italic">
        {title}
      </h3>
    </div>
    {/* Content */}
    <div className="relative z-10 mt-4 text-center">
      <h3 className="text-xl font-semibold text-gray-800">${price}</h3>
      <p className="text-sm text-gray-600 mt-2">
        {description.substring(0, 100)}...
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

const DesignFour = ({ image, title, price, description }) => (
  <div className="w-64 p-4 rounded-xl bg-white shadow-lg relative overflow-hidden">
    {/* Curved Gradient Top */}
    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-green-400 to-green-700 rounded-br-[100px]"></div>
    {/* Icon */}
    <div className="relative z-10 flex justify-between items-center">
      {/* <div className="text-6xl text-white">&#60;&#47;&#62;</div> */}
      <img
        className="w-16 h-16 rounded-full object-cover "
        src={image}
        alt=""
      />
      <h3 className="text-lg mr-6 ml-4 text-center font-semibold text-white italic">
        {title}
      </h3>
    </div>
    {/* Content */}
    <div className="relative z-10 mt-4 text-center">
      <h3 className="text-xl font-semibold text-gray-800">${price}</h3>
      <p className="text-sm text-gray-600 mt-2">
        {description.substring(0, 100)}...
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
