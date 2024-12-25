import axios from "axios";
import { useEffect, useState } from "react";
import TutorialCard from "./TutorialCard";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
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

  return (
    <div className="max-w-7xl mx-auto  my-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Our Tutorials</h2>
        <p className="text-gray-600 mt-2">
          Roating our all tutorials you can click any of and see details.
        </p>
      </div>

      <Marquee
        pauseOnHover={true}
        speed={80}
        gradient={true}
        gradientWidth={100}
      >
        {tutorial.map((data, index) => (
          <div className="ml-6" key={data._id}>
            <TutorialCard data={data} index={index} />
          </div>
        ))}
      </Marquee>
      {/* <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 sm:grid-cols-2 lg:grid-cols-4  max-w-7xl mx-auto w-full mb-4">
        {tutors.map((data, index) => (
          <TutorialCard key={data._id} data={data} index={index} />
        ))}
      </div> */}
      {/* <Link
        to="/tutorial"
        className="btn mt-4 text-xl hover:bg-pink-200 bg-pink-200 text-pink-500 w-fit font-bold"
      >
        View More
      </Link> */}
    </div>
  );
}
