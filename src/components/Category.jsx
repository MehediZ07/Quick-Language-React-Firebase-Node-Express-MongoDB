import { Link } from "react-router-dom";

export default function Category() {
  const categories = [
    { name: "Bangla", logo: "অ" },
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
    <div className=" max-w-7xl mx-auto mb-12">
      <div className="">
        <h2 className="text-3xl font-bold">Language Categorys</h2>
        <p className="text-gray-600 mt-2">
          Out All categorie here, you can click and see all of our tutorial by
          category.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-12 px-6 xl:px-0">
        {categories.map((category, index) => (
          <Link
            to={`/tutorial/${category.name}`}
            key={index}
            className={`flex items-center justify-center p-4 bg-base-100 border-2 solid border-gray-200 rounded-lg  hover:shadow transition duration-200 ${
              index === 8
                ? "col-span-2 md:col-span-1 w-1/2 md:w-full mx-auto"
                : ""
            }`}
          >
            <span
              className={
                index === 0 ? `text-2xl mt-1 -rotate-45 mr-3` : `text-2xl mr-3`
              }
            >
              {category.logo}
            </span>
            <span className="text-xl font-semibold">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
