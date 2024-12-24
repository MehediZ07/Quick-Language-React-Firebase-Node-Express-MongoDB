import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import JobDetails from "../pages/JobDetails";
// import AddJob from "../pages/AddJob";
import ErrorPage from "../pages/ErrorPage";
// import MyPostedJobs from "../pages/MyPostedJobs";
import UpdateJob from "../pages/UpdateJob";
import PrivateRoute from "./PrivateRoute";
import MyBids from "../pages/MyBids";
import BidRequests from "../pages/BidRequests";
// import AllJobs from "../pages/AllJobs";
import MyProfile from "../pages/Authentication/MyProfile";
import AddTutorials from "../pages/AddTutorials";
import AllTutorial from "../pages/AllTutorial";
import MyPostedTutorial from "../pages/MyPostedTutorial";
import TutorialDetails from "../pages/TutorialDetails";
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
            <UpdateJob />
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
            <MyBids />
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
      {
        path: "/bid-requests",
        element: (
          <PrivateRoute>
            <BidRequests />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
