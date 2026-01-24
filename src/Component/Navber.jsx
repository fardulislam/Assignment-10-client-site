import React, {  useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { Authcontext } from "../Context/AuthContext";

const Navber = () => {
  const { user , signout } = useContext(Authcontext);


  const [show, setshow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const hendlesignout = ()=>{
    signout()
    .then(result=>{
      console.log(result)
    })
    .catch(error=>{
      console.log(error)
    })
  }

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // scrolling down
      setshow(false);
    } else {
      // scrolling up
      setshow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "hover:text-primary"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/addcar"}
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "hover:text-primary"
          }
        >
          Add Car
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to={"/mylisting"}
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : "hover:text-primary"
              }
            >
              My Listings
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/mybooking"}
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : "hover:text-primary"
              }
            >
              My Booking
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          to={"/browscar"}
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "hover:text-primary"
          }
        >
          Browse Car
        </NavLink>
      </li>
    </>
  );
  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
max-w-7xl w-[95%]
bg-white/20 backdrop-blur-xl
border border-white/30
rounded-full shadow-xl
transition-transform duration-300
${show ? "translate-y-0" : "-translate-y-28"}`}
    >
      <div className="navbar px-6 ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content 
bg-white/30 backdrop-blur-lg 
rounded-box z-[50] mt-3 w-52 p-2 shadow-xl"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL || 'https://plus.unsplash.com/premium_vector-1719858611039-66c134efa74d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
                </div>
              </div>

              {/* optional dropdown */}
              <ul
                tabIndex={0}
                className="menu menu-sm space-y-2 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="font-semibold px-2">{user.displayName}</li>
                <li className="font-semibold px-2">{user.email}</li>
                <li>
                  <button className="btn btn-outline items-center" onClick={hendlesignout} >Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={"/login"} className="btn">
              Sign in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
