import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

import useAxiosSecure from "../hooks/useAxiosSecure";

import LoadingSpinner from "../components/LoadingSpinner";

export default function MyTutorialRequest() {
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const [bookReq, setbookReq] = useState([]);
  const { user } = useContext(AuthContext);

  const fetchAllBids = async () => {
    const { data } = await axiosSecure.get(`/bookRequest/${user?.email}`);

    setbookReq(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchAllBids();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <section className="container px-4 mx-auto my-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-500 ">My Requests</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {bookReq.length} Requests
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
                      Request Send by
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      Contact Email
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
                  </tr>
                </thead>
                <tbody className="bg-base-100 divide-y divide-gray-200">
                  {bookReq.map((item) => (
                    <tr key={item?._id}>
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
                        {item?.email}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        ${item?.price}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item?.language}
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
