import axios from "axios";
import { useEffect } from "react";

export default function Test() {
  useEffect(() => {
    // fetchAllJobs();
    fetchAllJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAllJobs = async () => {
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
  return (
    <div className="max-w-7xl mx-auto flex justify-center my-10 border-2 border-gray-700 solid rounded-xl">
      <h1 className="text-3xl p-10">Im Tasting multiple things here.</h1>
    </div>
  );
}
