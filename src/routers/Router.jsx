import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./privateRoute";
import Booking from "../pages/Booking/Booking";
import BookingPageCardDetails from "../componene/BookingPageCardDetails/BookingPageCardDetails";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/serviceDetails/:id",
                element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader:()=> fetch("/data.json")
            },
            {
                path:"/booking",
                element:<PrivateRoute><Booking></Booking></PrivateRoute>,
                loader:()=> fetch("/data.json")
            },
            {
                path:"/bookingItemDetails/:id",
                element:<PrivateRoute><BookingPageCardDetails></BookingPageCardDetails></PrivateRoute>,
                loader:()=> fetch("/data.json")
        },
        {
            path:"/blog",
            element:<PrivateRoute><Blog></Blog></PrivateRoute>
        }
        ]
    },
]);
export default router