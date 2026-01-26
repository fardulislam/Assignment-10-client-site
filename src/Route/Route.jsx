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
import CarDetails from "../Pages/CarDetails";
import Updatecar from "../Pages/Updatecar";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                index:true,
                element:<Home></Home>,
                  loader:()=>fetch('http://localhost:3000/car-collection')
            },
            {
                path:'/addcar',
                element:<Priviteroute><Addcar></Addcar></Priviteroute>
            },
            {
                path:'/browscar',
                element:<BrowsCar></BrowsCar>,
                 loader:()=>fetch('http://localhost:3000/car-collection')
              

            },
            {
                path:`/car-details/:id`,
                element:<Priviteroute><CarDetails></CarDetails></Priviteroute>,
                loader:({params})=>fetch(`http://localhost:3000/car-collection/${params.id}`)
            },
            {
                path:'/updatecar/:id',
                element:<Updatecar></Updatecar>,
                  loader:({params})=>fetch(`http://localhost:3000/car-collection/${params.id}`)
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