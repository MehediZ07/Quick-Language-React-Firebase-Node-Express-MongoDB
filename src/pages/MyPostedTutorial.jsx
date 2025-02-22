import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import LoadingSpinner from "../components/LoadingSpinner";
export default function MyPostedTutorial() {
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const [tutors, setTutors] = useState([]);
  useEffect(() => {
    fetchAlltutor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const fetchAlltutor = async () => {
    const { data } = await axiosSecure.get(`/tutors/${user?.email}`);

    setTutors(data);
    setLoading(false);
  };

  if (loading) return <LoadingSpinner></LoadingSpinner>;
  const handleDelete = async (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosSecure.delete(`/tutors/${_id}`);

          if (response.data) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });

            fetchAlltutor();
          }
        } catch (error) {
          console.error(
            "Error deleting item:",
            error.response ? error.response.data : error.message
          );

          Swal.fire({
            title: "Error!",
            text: "There was an issue deleting the item.",
            icon: "error",
          });
        }
      }
    });
  };
  return (
    <section className="container px-4 mx-auto pt-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">
          My Posted Tutorials
        </h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {tutors.length} Tutorials
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-base-200">
                  <tr>
                    <th className="py-3.5 px-4  font-normal text-left text-gray-500">
                      Image & Tutorial Title
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
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      Review
                    </th>
                    <th
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
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-base-100 divide-y divide-gray-200">
                  {tutors.map((item) => (
                    <tr key={item._id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={item.image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{item.title}</div>
                            <div className="badge badge-secondary text-xs">
                              NEW
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item.name}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        ${item.price}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item.language}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item.review}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item.description.substring(0, 18)}...
                      </td>
                      <td className="px-4 py-4 flex items-center text-sm text-gray-500 whitespace-nowrap">
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="font-medium text-3xl text-red-400   px-2  py-1 rounded-full "
                        >
                          <MdOutlineDeleteForever />
                        </button>
                        <Link to={`/update/${item._id}`}>
                          <button className="font-medium text-2xl  px-2  py-1 rounded-full ">
                            <FaEdit />
                          </button>
                        </Link>
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
}
