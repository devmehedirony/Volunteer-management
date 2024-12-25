import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import MyProfile from "../pages/MyProfile";
import Home from "../pages/Home";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import PrivateRoutes from "./PrivateRoutes";
import AddVolunteerPost from "../pages/AddVolunteerPost";
import AllVolunteerPosts from "../pages/AllVolunteerPosts";




const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },
  {
    path: 'all-volunteer-need-posts',
    element: <PrivateRoutes><AllVolunteerPosts /></PrivateRoutes>,
    loader: () => fetch('http://localhost:5000/need-volunteer-posts')
  },
  {
    path: 'add-volunteer-need-posts',
    element: <PrivateRoutes><AddVolunteerPost /></PrivateRoutes>
  },
  {
    path: 'my-profile',
    element: <PrivateRoutes><MyProfile /></PrivateRoutes>,
  },
  {
    path: 'volunteer/register',
    element: <Register/>
  },
  {
    path: 'volunteer/login',
    element: <Login/>
  },
 
]);


export default router