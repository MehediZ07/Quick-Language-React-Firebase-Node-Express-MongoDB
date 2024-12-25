// import axios from "axios";
// import { compareAsc, format } from "date-fns";
// import { useContext, useEffect, useState } from "react";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useNavigate, useParams } from "react-router-dom";
// import { AuthContext } from "../providers/AuthProvider";
// import { toast } from "react-hot-toast";
// import Swal from "sweetalert2";

// const JobDetails = () => {
//   const navigate = useNavigate();
//   const { user } = useContext(AuthContext);
//   const [startDate, setStartDate] = useState(new Date());
//   const { id } = useParams();
//   const [tutor, setTutor] = useState({});

//   useEffect(() => {
//     // fetchAlltutor();
//     fetchAlltutor();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const fetchAlltutor = async () => {
//     const { data: d } = await axios.get(
//       `${import.meta.env.VITE_API_URL}/tutors`
//     );
//     const { data } = await axios.get(
//       `${import.meta.env.VITE_API_URL}/tutor?id=${id}`
//     );
//     // const tutor = data.find((item) => item._id === id);
//     console.log(d);
//     setTutor(data);
//     console.log(data);
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const tutorId = tutor?._id;
//     const name = tutor?.name;
//     const image = tutor?.image;
//     const language = tutor?.language;
//     const price = tutor?.price;
//     const title = tutor?.title;
//     const review = tutor?.review;
//     const tutorEmail = tutor?.email;
//     const email = user?.email;

//     // 1. if user try to add own posted tutorial;
//     if (user?.email === tutor?.email)
//       return Swal.fire({
//         title: "Info",
//         text: "This is yur own posted tutorial.",
//         icon: "info",
//       });

//     // // 1. Deadline crossed validation
//     // if (compareAsc(new Date(), new Date(deadline)) === 1)
//     //   return toast.error("Deadline Crossed, Bidding Forbidden!");

//     // // 2. Price within maximum price range validation
//     // if (price > max_price)
//     //   return toast.error("Offer less or at least equal to maximum price!");

//     // // 3. offered deadline is within sellers deadline validation
//     // if (compareAsc(new Date(startDate), new Date(deadline)) === 1)
//     //   return toast.error("Offer a date within deadline");

//     const bookData = {
//       tutorId,
//       name,
//       image,
//       language,
//       title,
//       price,
//       review,
//       tutorEmail,
//       email,
//     };

//     try {
//       // 1. make a post request
//       await axios.post(`${import.meta.env.VITE_API_URL}/add-book`, bookData);

//       // 3. Show Swal and navigate
//       Swal.fire({
//         title: "Congratulation!",
//         text: "Added to booked list.",
//         icon: "success",
//       });
//       navigate("/My-bookings");
//     } catch (err) {
//       Swal.fire({
//         title: "Info",
//         text: "You have already Booked this tutorial.",
//         icon: "info",
//       });
//     }
//   };
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="card w-96 bg-white shadow-xl border border-gray-200 p-5">
//         <div className="flex flex-col items-center">
//           <img
//             src={tutor?.image}
//             alt={`${tutor.name}'s profile`}
//             className="w-24 h-24 rounded-full object-cover mb-4"
//           />
//           <h2 className="text-xl font-semibold">{tutor?.name}</h2>
//           <p className="text-gray-500 text-sm mt-1">{tutor?.email}</p>
//         </div>
//         <div className="mt-4 space-y-2">
//           <p>
//             <strong>Language:</strong> {tutor?.language}
//           </p>
//           <p>
//             <strong>Price:</strong> ${tutor?.price}
//           </p>
//           <p>
//             <strong>Review:</strong> {tutor?.review}
//           </p>
//           <p>
//             <strong>Description:</strong> {tutor?.description}
//           </p>
//         </div>
//         <div className="mt-6">
//           <button onClick={handleSubmit} className="btn btn-primary w-full">
//             Book Trial Lesson
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobDetails;
