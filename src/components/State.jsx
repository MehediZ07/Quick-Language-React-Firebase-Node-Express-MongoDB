import axios from "axios";
import { useEffect, useState } from "react";

export default function State() {
  const [tutorials, setTurorials] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // fetchAlltutor();
    fetchAlltutor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAlltutor = async () => {
    const { data: tutors } = await axios.get(
      `${import.meta.env.VITE_API_URL}/tutors`
    );
    const { data: user } = await axios.get(
      `${import.meta.env.VITE_API_URL}/users`
    );
    // const tutor = data.find((item) => item._id === id);
    setTurorials(tutors);
    setUsers(user);
    // console.log(data);
  };

  // Step 1: Use map() to create an array of prices
  const review = tutorials?.map((obj) => obj.review);
  console.log(review);
  // Step 2: Use reduce() to calculate the total price
  const totalReview = review?.reduce((sum, review) => sum + review, 0);
  console.log(totalReview);

  const language = tutorials?.map((obj) => obj.language);

  // Step 2: Use reduce() to count the occurrences of each category
  const languageCounts = language?.reduce((acc, language) => {
    if (acc[language]) {
      acc[language] += 1;
    } else {
      acc[language] = 1;
    }
    return acc;
  }, {});

  const tutors = tutorials?.map((obj) => obj.email);
  //   console.log(tutors);

  // Step 2: Use reduce() to count the occurrences of each category
  const tutorsCounts = tutors?.reduce((acc, tutors) => {
    if (acc[tutors]) {
      acc[tutors] += 1;
    } else {
      acc[tutors] = 1;
    }
    return acc;
  }, {});

  return (
    <div className="max-w-7xl mx-auto my-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
        {/* Box 1 */}
        <div className="bg-base-100 shadow-lg rounded-lg p-4 text-center">
          <h2 className="text-3xl font-bold text-gray-500">
            {Object.keys(tutorsCounts).length - 1}+
          </h2>
          <p className="text-sm text-gray-600">Total experienced tutors</p>
        </div>

        {/* Box 2 */}
        <div className="bg-base-100 shadow-lg rounded-lg p-4 text-center">
          <h2 className="text-3xl font-bold text-gray-500">
            {totalReview - 1}+
          </h2>
          <p className="text-sm text-gray-600">Total reviews</p>
        </div>

        {/* Box 3 */}
        <div className="bg-base-100 shadow-lg rounded-lg p-4 text-center dropdown dropdown-hover">
          <h2 className="text-3xl font-bold text-gray-500">
            {Object.keys(languageCounts).length - 1}+
          </h2>
          <p className="text-sm text-gray-600">Subjects taught</p>

          {/* <div tabIndex={0} role="button" className="btn m-1">
            Hover
          </div> */}
          <div
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1000] w-full p-3 shadow -ml-4  grid grid-cols-2 justify-between items-center gap-3  mx-auto text-base"
          >
            <p className="px-4  py-2 text-purple-600 bg-purple-100 rounded-full ">
              English
            </p>
            <p className="px-4 py-2 text-green-600 bg-green-100 rounded-full ">
              Spanish
            </p>
            <p className="px-4 py-2 text-blue-600 bg-blue-100 rounded-full">
              French
            </p>
            <p className="px-4 py-2 text-orange-600 bg-orange-100 rounded-full ">
              Italian
            </p>
            <p className="px-4 py-2 text-yellow-500 bg-yellow-100 rounded-full ">
              Chinese
            </p>
            <p className="px-4 py-2 text-lime-600  bg-lime-100 rounded-full ">
              German
            </p>
            <p className="px-4 py-2 text-cyan-600 bg-cyan-100 rounded-full ">
              Arabic
            </p>
            <p className="px-4 py-2 text-fuchsia-600 bg-fuchsia-100 rounded-full ">
              Japanese
            </p>
          </div>
        </div>

        {/* Box 4 */}
        <div className="bg-base-100 shadow-lg rounded-lg  p-4 text-center">
          <h2 className="text-3xl font-bold text-gray-500">
            {users.length - 1}+
          </h2>
          <p className="text-sm text-gray-600">Active User</p>
        </div>

        {/* Box 5 */}
        {/* <div className="bg-base-100 shadow-lg rounded-lg p-4 text-center">
          <h2 className="text-3xl font-bold text-gray-500">4.8</h2>
          <p className="text-sm text-gray-600 flex items-center justify-center">
            <span className="text-yellow-500 mr-1">★★★★★</span> on the App Store
          </p>
        </div> */}
      </div>

      <h1>
        {totalReview} {tutorials.length}
      </h1>
    </div>
  );
}