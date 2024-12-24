import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import BidTableRow from "../components/BidTableRow";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import ReactStars from "react-stars";
import Swal from "sweetalert2";
import axios from "axios";

const MyBids = () => {
  const axiosSecure = useAxiosSecure();
  const [booked, setBooked] = useState([]);
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating); // Update the rating state
    console.log("New Rating:", newRating);
  };
  const fetchAllBids = async () => {
    const { data } = await axiosSecure.get(`/booked/${user?.email}`);
    // setBids(data);\
    setBooked(data);
  };
  useEffect(() => {
    fetchAllBids();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddReview = async (e) => {
    e.preventDefault();

    const comment = e.target.comment.value;
    const id = e.target.id.value;

    const tutorialData = {
      tutorId: id,
      name: user?.displayName || "",
      email: user?.email || "",
      image: user?.photoURL,
      rating: rating,
      comment: comment,
    };

    console.log("Sending the following data:", tutorialData);
    console.log("API URL:", `${import.meta.env.VITE_API_URL}/add-review`);

    try {
      // Make the PUT request to add the review
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/add-review`,
        tutorialData
      );

      // Check the response status
      if (response.data.success) {
        Swal.fire({
          title: "Success!",
          text: "Review added successfully.",
          icon: "success",
          confirmButtonText: "Ok",
        });

        // Optionally, reset the form
        e.target.reset();
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "Error!",
        text: err.response?.data?.error || "Something went wrong.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <section className="container px-4 mx-auto my-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">My Bids</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {booked.length} Bid
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3.5 px-4  font-normal text-left text-gray-500">
                      Image
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      Language
                    </th>
                    <th className="py-3.5 pl-28 px-4 text-sm font-normal text-left text-gray-500">
                      Review
                    </th>
                    {/* <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      Make Change
                    </th> */}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {booked.map((item) => (
                    <tr key={item?._id}>
                      <tr>
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {/* <div className="flex h-full -mt-12 items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle h-12 w-12">
                                <img
                                  src={item?.image}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">Hart Hagerty</div>
                              <div className="text-sm opacity-50">
                                United States
                              </div>
                            </div>
                          </div> */}

                          <div className="h-full flex items-center justify-center ">
                            <img
                              className="mask mask-squircle h-12 w-12"
                              src={item?.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </td>
                      </tr>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item?.name}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        ${item?.price}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item?.language}
                      </td>

                      {/* <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"></td> */}
                      <td className=" justify-center gap-2 px-4 py-4 flex items-center text-sm text-gray-500 whitespace-nowrap">
                        <div className="mb-4">
                          <p>Rating</p>
                          <h2 className=" font-semibold flex items-center justify-start">
                            <ReactStars
                              count={5}
                              size={24}
                              isHalf={true}
                              emptyIcon={<i className="far fa-star"></i>}
                              halfIcon={<i className="fa fa-star-half-alt"></i>}
                              fullIcon={<i className="fa fa-star"></i>}
                              activeColor="#ffcc26"
                              value="0" // Controlled by state
                              onChange={handleRatingChange} // Callback to handle value change
                            />
                          </h2>
                        </div>
                        <form
                          className="flex items-center gap-2 justify-center"
                          onSubmit={handleAddReview} // Changed to onSubmit
                        >
                          <div>
                            <textarea
                              name="comment"
                              rows="1"
                              placeholder="Enter comment..."
                              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                            ></textarea>
                          </div>
                          <div className="hidden">
                            <label className="block text-sm font-medium text-gray-700">
                              Email
                            </label>
                            <input
                              type="text"
                              name="id"
                              defaultValue={item.tutorId}
                              className="mt-1 block w-full px-4 py-2 text-gray-500 focus:outline-none rounded-md"
                            />
                          </div>
                          <div>
                            <button className="btn btn-sm" type="submit">
                              Review
                            </button>
                          </div>
                        </form>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBids;
