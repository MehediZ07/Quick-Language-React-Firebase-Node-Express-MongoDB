import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";

import ErrorPage from "../pages/ErrorPage";

import PrivateRoute from "./PrivateRoute";

import MyProfile from "../pages/Authentication/MyProfile";
import AddTutorials from "../pages/AddTutorials";
import AllTutorial from "../pages/AllTutorial";
import MyPostedTutorial from "../pages/MyPostedTutorial";
import TutorialDetails from "../pages/TutorialDetails";
import MyBookings from "../pages/MyBookings";
import UpdateTutorial from "../pages/UpdateTutorial";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/tutorial",
        element: <AllTutorial />,
      },
      {
        path: "/tutorial/:category",
        element: <AllTutorial />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/myProfile",
        element: <MyProfile />,
      },
      {
        path: "/registration",
        element: <Register />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <TutorialDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateTutorial />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-tutorials",
        element: (
          <PrivateRoute>
            <AddTutorials />
          </PrivateRoute>
        ),
      },
      {
        path: "/My-bookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-posted-tutorials",
        element: (
          <PrivateRoute>
            <MyPostedTutorial />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
