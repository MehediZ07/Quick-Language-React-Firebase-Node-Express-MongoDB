import axios from "axios";
import { useEffect, useState } from "react";
import TutorialCard from "./TutorialCard";
import { Link } from "react-router-dom";

export default function Tutorial() {
  const [tutorial, setTutorial] = useState([]);
  useEffect(() => {
    const fetchAlltutor = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/tutors`
      );
      console.log(data);
      setTutorial(data);
    };
    fetchAlltutor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tutors = tutorial.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto text-center my-6">
      <h1>Tutorial</h1>
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 sm:grid-cols-2 lg:grid-cols-4  max-w-7xl mx-auto w-full mb-4">
        {tutors.map((data, index) => (
          <TutorialCard key={data._id} data={data} index={index} />
        ))}
      </div>
      <Link
        to="/tutorial"
        className="btn mt-4 text-xl hover:bg-pink-200 bg-pink-200 text-pink-500 w-fit font-bold"
      >
        View More
      </Link>
    </div>
  );
}
