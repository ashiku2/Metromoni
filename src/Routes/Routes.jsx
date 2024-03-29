import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../pages/Home/HomePage/HomePage";
import BiodatasPage from "../pages/Home/HomePage/BiodatasPage";
import AboutUs from "../pages/Home/HomePage/AboutUs";
import ContactUs from "../pages/Home/HomePage/ContactUs";
import Login from "../pages/Home/HomePage/Login";
import BiodataDetailsPage from "../pages/Home/HomePage/BiodataDetailsPage";
import Register from "../pages/Home/HomePage/Register";
import CheckoutPage from "../pages/Home/HomePage/CheckoutPage";
import UserDashboard from "../pages/Home/UserDashboard/UserDashboard";
import AdminDashboard from "../pages/Home/AdminDashboard/AdminDashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/biodatas',
                element: <BiodatasPage></BiodatasPage>
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/details',
                element: <BiodataDetailsPage></BiodataDetailsPage>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout',
                element: <CheckoutPage></CheckoutPage>
            },
            {
                path: '/userDashboard',
                element: <UserDashboard></UserDashboard>
            },
            {
                path: '/dashboard',
                element: <AdminDashboard></AdminDashboard>
            }


        ]
    },
]);
