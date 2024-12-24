import axios from "axios";
import { compareAsc, format } from "date-fns";
import { useContext, useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

export default function TutorialDetails() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const { id } = useParams();
  const [tutor, setTutor] = useState({});

  useEffect(() => {
    // fetchAlltutor();
    fetchAlltutor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAlltutor = async () => {
    const { data: d } = await axios.get(
      `${import.meta.env.VITE_API_URL}/tutors`
    );
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/tutor?id=${id}`
    );
    // const tutor = data.find((item) => item._id === id);
    console.log(d);
    setTutor(data);
    console.log(data);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const tutorId = tutor?._id;
    const name = tutor?.name;
    const image = tutor?.image;
    const language = tutor?.language;
    const price = tutor?.price;
    const title = tutor?.title;
    const review = tutor?.review;
    const tutorEmail = tutor?.email;
    const email = user?.email;

    // 1. if user try to add own posted tutorial;
    if (user?.email === tutor?.email)
      return Swal.fire({
        title: "Info",
        text: "This is yur own posted ",
        icon: "info",
      });

    // // 1. Deadline crossed validation
    // if (compareAsc(new Date(), new Date(deadline)) === 1)
    //   return toast.error("Deadline Crossed, Bidding Forbidden!");

    // // 2. Price within maximum price range validation
    // if (price > max_price)
    //   return toast.error("Offer less or at least equal to maximum price!");

    // // 3. offered deadline is within sellers deadline validation
    // if (compareAsc(new Date(startDate), new Date(deadline)) === 1)
    //   return toast.error("Offer a date within deadline");

    const bookData = {
      tutorId,
      name,
      image,
      language,
      title,
      price,
      review,
      tutorEmail,
      email,
    };

    try {
      // 1. make a post request
      await axios.post(`${import.meta.env.VITE_API_URL}/add-book`, bookData);

      // 3. Show Swal and navigate
      Swal.fire({
        title: "Congratulation!",
        text: "Added to booked list.",
        icon: "success",
      });
      navigate("/My-bookings");
    } catch (err) {
      Swal.fire({
        title: "Info",
        text: "You have already Booked this tutorial.",
        icon: "info",
      });
    }
  };

  const {
    title,
    image,
    name,
    price,
    language,
    description,
    review,
    email,
    allReviews = [], // Default to an empty array if allReviews is undefined
  } = tutor;
  return (
    // <div className="p-4 md:p-8 bg-gray-100">
    //   {/* Tutorial Details */}
    //   <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       className="h-60 w-full md:w-1/3 object-cover"
    //       src={image}
    //       alt={title}
    //     />
    //     <div className="p-6 flex-1">
    //       <h2 className="text-2xl font-bold mb-2">{title}</h2>
    //       <p className="text-sm text-gray-500 mb-4">Language: {language}</p>
    //       <p className="text-gray-700">{description}</p>
    //       <div className="mt-4">
    //         <span className="text-lg font-semibold">Price: </span>
    //         <span className="text-lg text-blue-600">${price}</span>
    //       </div>
    //       <div className="mt-2">
    //         <span className="text-sm text-yellow-600">{review} Review(s)</span>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Reviews Section */}
    //   <div className="mt-8">
    //     <h3 className="text-xl font-semibold mb-4">Reviews</h3>
    //     {allReviews.length === 0 ? (
    //       <p className="text-gray-500">No reviews available.</p>
    //     ) : (
    //       allReviews.map((review, index) => (
    //         <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
    //           <div className="flex items-center mb-2">
    //             <img
    //               className="w-10 h-10 rounded-full mr-4"
    //               src={review.image}
    //               alt={review.name}
    //             />
    //             <div>
    //               <h4 className="font-bold">{review.name}</h4>
    //               <span className="text-sm text-gray-500">
    //                 {new Date(review.date).toLocaleDateString()}
    //               </span>
    //             </div>
    //           </div>
    //           <p className="text-yellow-600 font-semibold">
    //             Rating: {review.rating}
    //           </p>
    //           <p className="text-gray-700">{review.comment}</p>
    //         </div>
    //       ))
    //     )}
    //   </div>
    // </div>
    <div className="p-6 bg-base-100 min-h-screen">
      {/* Tutorial Details */}
      <div className="max-w-5xl mx-auto bg-base-100 shadow-md rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <img
            src={image}
            alt={title}
            className="w-full md:w-1/3 object-cover"
          />
          <div className="p-6 flex-1">
            <h1 className="text-2xl font-bold text-gray-500 mb-2">{title}</h1>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex flex-wrap gap-4 mb-4">
              <span className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                Language: {language}
              </span>
              <span className="bg-green-100 text-green-600 text-sm font-medium px-3 py-1 rounded-full">
                Price: ${price}
              </span>
              <span className="bg-yellow-100 text-yellow-600 text-sm font-medium px-3 py-1 rounded-full">
                Reviews: {review}
              </span>
            </div>
            <p className="text-gray-500 font-medium">Instructor: {name}</p>
            <p className="text-gray-500 italic text-sm ">Contact: {email}</p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-w-5xl mx-auto mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Reviews</h2>

        {allReviews.map((review, index) => (
          <div
            key={index}
            className="bg-base-100 shadow-md rounded-lg p-6 mb-4 flex items-start gap-4"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-12 h-12  rounded-full object-cover"
            />
            <div className="flex flex-col gap-2">
              <div className="flex flex-col items-start justify-between">
                <h3 className="text-lg font-medium text-gray-500">
                  {review.name}
                </h3>
                <p className="text-gray-500 text-xs">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="bg-yellow-100 text-yellow-600 text-sm font-medium px-2 py-1 rounded">
                  {review.rating.toFixed(1)} ★
                </p>
                <p className="text-gray-500 text-sm ">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
