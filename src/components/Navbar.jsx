import { useContext } from "react";
import logo from "../assets/images/web-logo.png";
import { AuthContext } from "../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import TheemToggle from "./TheemToggle";
import Headroom from "react-headroom";
// import { CiLogout } from "react-icons/ci";
// import { IoMdCart } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          className="navlink ml-1"
          to="/"
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "600",
                  color: "#fff",
                  background:
                    "linear-gradient(to right, #00e0a1, #00b0e0, #0088cc)",
                }
              : {
                  fontWeight: "400",
                  backgroundColor: "#ffffffa0",
                  color: "#374151",
                }
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navlink ml-1"
          to="/tutorial"
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "600",
                  color: "#fff",
                  background:
                    "linear-gradient(to right, #00e0a1, #00b0e0, #0088cc)",
                }
              : {
                  fontWeight: "400",
                  backgroundColor: "#ffffffa0",
                  color: "#374151",
                }
          }
        >
          Find tutors
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navlink ml-1"
          to="/add-tutorials"
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "600",
                  color: "#fff",
                  background:
                    "linear-gradient(to right, #00e0a1, #00b0e0, #0088cc)",
                }
              : {
                  fontWeight: "400",
                  backgroundColor: "#ffffffa0",
                  color: "#374151",
                }
          }
        >
          Add Tutorials
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navlink ml-1"
          to="/my-posted-tutorials"
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "600",
                  color: "#fff",
                  background:
                    "linear-gradient(to right, #00e0a1, #00b0e0, #0088cc)",
                }
              : {
                  fontWeight: "400",
                  backgroundColor: "#ffffffa0",
                  color: "#374151",
                }
          }
        >
          My Tutorials
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navlink ml-1"
          to="/My-bookings"
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "600",
                  color: "#fff",
                  background:
                    "linear-gradient(to right, #00e0a1, #00b0e0, #0088cc)",
                }
              : {
                  fontWeight: "400",
                  backgroundColor: "#ffffffa0",
                  color: "#374151",
                }
          }
        >
          My booked tutors
        </NavLink>
      </li>

      <li>
        <NavLink
          className="navlink ml-1"
          to="/bid-requests"
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "600",
                  color: "#fff",
                  background:
                    "linear-gradient(to right, #00e0a1, #00b0e0, #0088cc)",
                }
              : {
                  fontWeight: "400",
                  backgroundColor: "#ffffffa0",
                  color: "#374151",
                }
          }
        >
          Bid Requests
        </NavLink>
      </li>
    </>
  );
  return (
    <Headroom style={{ zIndex: 1000 }}>
      <div className="bg-opacity-50 backdrop-blur-sm py-1 bg-transparent w-full">
        <div className="navbar p-0  bg-transparent max-w-7xl mx-auto ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <div className="items-center flex">
              <Link
                to="/"
                className="btn -mt-4 bg-transparent hover:bg-transparent border-none p-2"
              >
                <img className="h-14 w-28  " src={logo} alt="Logo" />
              </Link>
              <TheemToggle></TheemToggle>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1"> {links}</ul>
          </div>
          <div className="navbar-end">
            <div className=" mr-2">
              {user && user?.email ? (
                // <div className="relative h-full hover:scale-90 group w-fit">
                //   <Link to="/">
                //     <img
                //       src={user?.photoURL}
                //       alt="User"
                //       className="w-10 h-10 rounded-full mt-2 mx-auto mb-2 border-2 solid border-green-400"
                //     />
                //   </Link>
                //   <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full h-6 -mb-[.5rem] w-36 bg-gradient-to-r from-[#00e0a1] via-[#00b0e0]  to-[#1bb3ff] text-white  rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg z-50">
                //     <p className="text-center font-bold">{user.displayName}</p>
                //   </div>
                // </div>
                <div className="dropdown dropdown-end z-50">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div
                      title={user?.displayName}
                      className="w-10 rounded-full"
                    >
                      <img
                        referrerPolicy="no-referrer"
                        alt="User Profile Photo"
                        src={user?.photoURL}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 min-w-64 w-fit rounded-lg -mr-20 "
                  >
                    <div className="flex items-center gap-4 border-2 p-1 pr-2 border-gray-200 solid rounded-md">
                      <div className="w-14 h-14 rounded-full">
                        <img
                          className="w-full h-full rounded-full"
                          src={user?.photoURL}
                          alt={user ? user.displayName : ""}
                        />
                      </div>
                      <div>
                        <h1 className="text-[#97e5d4] font-semibold text-xl ">
                          {user ? user.displayName : ""}
                        </h1>
                        <p className="text-gray-500 italic text-xs overflow-auto">
                          {user ? user.email : ""}
                        </p>
                      </div>
                    </div>
                  </ul>
                </div>
              ) : (
                <div className="text-[2.7rem] text-[#faa2a0]">
                  <FaCircleUser></FaCircleUser>
                </div>
              )}
            </div>

            {user && user?.email ? (
              <button
                onClick={logOut}
                className="btn btn-sm h-10 bg-gradient-to-r from-[#faa2a0]  to-[#faa1a092] text-gray-600 font-bold  "
              >
                Log-Out
              </button>
            ) : (
              <Link
                to="/login"
                className="btn btn-sm h-10 bg-[#bbe6dd] hover:bg-[#b5eade]  text-gray-600 font-bold  "
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </Headroom>
  );
};

export default Navbar;
