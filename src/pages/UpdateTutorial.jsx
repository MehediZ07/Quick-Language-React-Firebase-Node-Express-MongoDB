import { useContext, useEffect, useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

import Lottie from "lottie-react";

import addTutorLootie from "../assets/images/AddTutor.json";

import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

export default function UpdateTutorial() {
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const [tutor, setTutor] = useState({});

  useEffect(() => {
    fetchAlltutor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchAlltutor = async () => {
    const { data } = await axiosSecure.get(`/tutors/${user?.email}?id=${id}`);

    setTutor(data[0]);
    setLoading(false);
  };

  if (loading) return <span className="loading loading-dots loading-lg"></span>;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const form = e.target;

    const tutorialData = {
      image: formData.get("image"),
      title: formData.get("title"),
      price: formData.get("price"),
      language: formData.get("language"),
      description: formData.get("description"),
    };

    try {
      await axiosSecure.put(`/update-tutors/${id}`, tutorialData);

      Swal.fire({
        title: "Success!",
        text: "Tutorial Update successfully",
        icon: "success",
        confirmButtonText: "Ok",
      });
      navigate("/my-posted-tutorials");
      form.reset();
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Somthing Wrong",
        icon: "Error",
        confirmButtonText: "Ok",
      });
    }
  };
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <div className="flex w-full max-w-sm sm:max-w-2xl  mx-auto overflow-hidden bg-base-100 rounded-lg shadow-lg  md:max-w-6xl ">
        <div className="hidden bg-cover bg-center md:block md:w-1/2">
          <Lottie animationData={addTutorLootie}></Lottie>
        </div>

        <div className="w-full px-6 py-8 md:px-8 md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-base-100 shadow-md rounded-lg p-6 space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={user?.displayName}
                disabled
                className="mt-1 block w-full px-4 py-2 text-gray-500 focus:outline-none rounded-md"
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={user?.email}
                disabled
                className="mt-1 block w-full px-4 py-2 text-gray-500 focus:outline-none rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 ">
                Tutorial Title
              </label>
              <input
                type="text"
                name="title"
                defaultValue={tutor?.title}
                placeholder="Enter title"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 ">
                Tutorial Image
              </label>
              <input
                type="text"
                name="image"
                defaultValue={tutor?.image}
                placeholder="Enter image URL"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex w-full gap-2 justify-between">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Language
                </label>
                <select
                  id="language"
                  name="language"
                  defaultValue={tutor?.language}
                  className="mt-1 block min-w-28 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                >
                  <option value="Bangla">Bangla</option>
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="Italian">Italian</option>
                  <option value="Chinese">Chinese</option>
                  <option value="German">German</option>
                  <option value="Arabic">Arabic</option>
                  <option value="Japanese">Japanese</option>
                  <option value="Spanish">Spanish</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  defaultValue={tutor?.price}
                  placeholder="Enter price"
                  className="mt-1 block w-24 sm:w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                />
              </div>
              <div className="w-16">
                <label className="block text-sm font-medium text-gray-700">
                  Review
                </label>
                <input
                  type="number"
                  id="review"
                  name="review"
                  value="0"
                  disabled
                  defaultValue={tutor?.review}
                  className="mt-1 w-16 block  px-3 py-2 text-gray-500 focus:outline-none rounded-md"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="3"
                defaultValue={tutor?.description}
                placeholder="Enter a description..."
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
