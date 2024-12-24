// import axios from "axios";
// import { useState } from "react";
// import ReactStars from "react-stars";
// import Swal from "sweetalert2";

// // eslint-disable-next-line react/prop-types
// export default function Review({ item, user, fetchAllBids }) {
//   const [rating, setRating] = useState(0);

//   const handleRatingChange = (newRating) => {
//     setRating(newRating); // Update the rating state
//     console.log("New Rating:", newRating);
//   };

//   const handleAddReview = async (e) => {
//     e.preventDefault();

//     const comment = e.target.comment.value;

//     if (rating === 0) {
//       Swal.fire({
//         title: "Error!",
//         text: "Please provide a rating.",
//         icon: "error",
//         confirmButtonText: "Ok",
//       });
//       return;
//     }

//     if (!comment.trim()) {
//       Swal.fire({
//         title: "Error!",
//         text: "Please provide a comment.",
//         icon: "error",
//         confirmButtonText: "Ok",
//       });
//       return;
//     }

//     // Continue with the submission
//     const tutorialData = {
//       tutorId: item?._id,
//       name: user?.displayName || "",
//       email: user?.email || "",
//       image: user?.photoURL,
//       rating: rating,
//       comment: comment,
//     };

//     try {
//       const response = await axios.put(
//         `${import.meta.env.VITE_API_URL}/add-review`,
//         tutorialData
//       );

//       if (response.data.success) {
//         Swal.fire({
//           title: "Success!",
//           text: "Review added successfully.",
//           icon: "success",
//           confirmButtonText: "Ok",
//         });
//         e.target.reset();
//         fetchAllBids();
//       }
//     } catch (err) {
//       console.error(err);
//       Swal.fire({
//         title: "Error!",
//         text: err.response?.data?.error || "Something went wrong.",
//         icon: "error",
//         confirmButtonText: "Ok",
//       });
//     }
//   };

//   return (
//     <div className=" justify-center gap-2 flex items-center whitespace-nowrap">
//       <div className="mb-4">
//         <p>Review</p>
//         <h2 className=" font-semibold flex items-center justify-start">
//           <ReactStars
//             count={5}
//             size={24}
//             isHalf={true}
//             emptyIcon={<i className="far fa-star"></i>}
//             halfIcon={<i className="fa fa-star-half-alt"></i>}
//             fullIcon={<i className="fa fa-star"></i>}
//             activeColor="#ffcc26"
//             value="0" // Controlled by state
//             onChange={handleRatingChange} // Callback to handle value change
//           />
//         </h2>
//       </div>
//       <form
//         className="flex items-center gap-2 justify-center"
//         onSubmit={handleAddReview} // Changed to onSubmit
//       >
//         <div>
//           <textarea
//             name="comment"
//             rows="1"
//             placeholder="Enter comment..."
//             className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
//           ></textarea>
//         </div>
//         <div>
//           <button className="btn btn-sm" type="submit">
//             Review
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
