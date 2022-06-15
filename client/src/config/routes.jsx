import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserDetails from "../pages/UserDetails";
import Dashboard from "../pages/Dashboard";
import NewBooking from "../pages/NewBooking";
import Login from "../pages/LogIn";
import Signup from "../pages/Signup";
import ProtectedPage from "../pages/ProtectedPage";
import * as PATHS from "../utils/paths";

const routes = (props) => {
  const { user } = props;
  return [
    {
      path: PATHS.HOMEPAGE,
      element: <HomePage {...props} />,
    },
    {
      path: PATHS.SIGNUPPAGE,
      element: <Signup {...props} />,
    },
    // {
    //   path: PATHS.DETAILS,
    //   element: <UserDetails {...props} />,
    // },
    {
      path: PATHS.LOGINPAGE,
      element: <Login {...props} />,
    },
    {
      path: PATHS.PROTECTEDPAGE,
      element: user ? (
        <ProtectedPage {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
    {
      path: PATHS.DETAILS,
      element: user ? (
        <UserDetails {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
    {
      path: PATHS.DASHBOARD,
      element: user ? (
        <Dashboard {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
    {
      path: PATHS.NEWBOOKING,
      element: user ? (
        <NewBooking {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
  ];
};

export default routes;
