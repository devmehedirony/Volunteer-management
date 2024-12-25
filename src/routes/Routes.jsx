import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import VolunteerPost from "../pages/VolunteerPost";
import MyProfile from "../pages/MyProfile";
import Home from "../pages/Home";




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
    element: <VolunteerPost/>
  },
  {
    path: 'my-profile',
    element: <MyProfile/>,
  }
  
]);


export default router