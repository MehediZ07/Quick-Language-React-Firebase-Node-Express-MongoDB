import axios from "axios";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import Lottie from "lottie-react";

import addTutorLootie from "../assets/images/AddTutor.json";

import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

const UpdateJob = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [startDate, setStartDate] = useState(new Date());
  const [tutor, setTutor] = useState({});
  // useEffect(() => {
  //   fetchJobData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [id]);

  useEffect(() => {
    // fetchAllJobs();
    fetchAllJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchAllJobs = async () => {
    const { data } = await axiosSecure.get(`/tutors/${user?.email}?id=${id}`);
    // const tutor = data.find((item) => item._id === id);
    console.log(data[0]);
    setTutor(data[0]);
  };

  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_API_URL}/tutors`)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch");
  //       }
  //       return response.json();
  //     })
  //     .then((json) => {
  //       setJob(json);
  //       console.log(json);
  //     })
  //     // eslint-disable-next-line no-unused-vars
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Use FormData to collect form field values
    const formData = new FormData(e.target);
    const form = e.target;
    // Extract values by field names

    const tutorialData = {
      image: formData.get("image"),
      price: formData.get("price"),
      language: formData.get("language"),
      description: formData.get("description"),
    };

    try {
      // 1. make a post request

      await axiosSecure.put(`/update-tutors/${id}`, tutorialData);
      // 2. Reset form

      Swal.fire({
        title: "Success!",
        text: "Tutorial Update successfully",
        icon: "success",
        confirmButtonText: "Ok",
      });
      navigate("/my-posted-jobs");
      form.reset();
    } catch (err) {
      console.log(err);
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
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                  <option value="italian">Italian</option>
                  <option value="chiness">Chinese</option>
                  <option value="german">German</option>
                  <option value="arabic">Arabic</option>
                  <option value="japanese">Japanese</option>
                  <option value="spenish">Spenish</option>
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
};

export default UpdateJob;
