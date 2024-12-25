import axios from "axios";
import { useEffect, useState } from "react";
import TutorialCard from "./TutorialCard";

import Marquee from "react-fast-marquee";
export default function Tutorial() {
  const [tutorial, setTutorial] = useState([]);
  useEffect(() => {
    const fetchAlltutor = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/tutors`
      );

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
    </div>
  );
}
