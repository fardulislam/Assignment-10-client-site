import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../MainLayout/MainLayout";
import Addcar from "../Pages/Addcar";
import BrowsCar from "../Pages/BrowsCar";
import Mybooking from "../Pages/Mybooking";
import MyListing from "../Pages/MyListing";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Priviteroute from "../Component/Priviteroute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:'/addcar',
                element:<Addcar></Addcar>
            },
            {
                path:'/browscar',
                element:<BrowsCar></BrowsCar>,
                loader:()=>fetch('http://localhost:3000/car-collection')

            },
            {
                path:'/mybooking',
                element:<Priviteroute><Mybooking></Mybooking></Priviteroute>
            },
            {
                path:'/mylisting',
                element:<Priviteroute><MyListing></MyListing></Priviteroute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
           
        ]
        
    },
])