import { Link } from "react-router-dom";

export default function Category() {
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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto my-12 px-6 xl:px-0">
      {categories.map((category, index) => (
        <Link
          to={`/tutorial/${category.name}`}
          key={index}
          className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-200"
        >
          <span className="text-2xl mr-3">{category.logo}</span>
          <span className="text-lg font-semibold">{category.name}</span>
        </Link>
      ))}
    </div>
  );
}
