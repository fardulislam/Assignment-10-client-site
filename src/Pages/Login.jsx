import React, { useContext, useState } from "react";
import { Authcontext } from "../Context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {
  const [show, setshow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { signinwithgoogle, singinuser } = useContext(Authcontext);

  const hendlesignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    singinuser(email, password)
      .then((result) => {
        console.log(result);
        toast.success("sign in successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  const hendlegooglesingin = () => {
    signinwithgoogle()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" min-h-screen flex justify-center items-center w-11/12 mx-auto pt-24 pb-10">
      <div className="card-body bg-white rounded-2xl">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Image Section */}
          <div className="w-full md:w-1/2 hidden md:block">
            <img
              src="https://shoppingzonebd.com.bd/assets/front-end/img/login-img.jpg"
              alt="Login"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 px-10">
          <div className="py-10 space-y-4">
            <h1 className="font-bold text-5xl">Hello, <br></br> <span className="text-blue-300">Welcome Back</span></h1>
          <h2 className="text-xs">hay welcome back to your special place</h2>
          </div>
            <form onSubmit={hendlesignin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input w-full"
                  placeholder="Email"
                  required
                />

                <div className="relative mt-2">
                  <label className="label">Password</label>
                  <input
                    name="password"
                    type={show ? "text" : "password"}
                    className="input w-full"
                    placeholder="Password"
                    required
                  />
                  <span
                    onClick={() => setshow(!show)}
                    className="absolute right-3 top-[34px] cursor-pointer"
                  >
                    {show ? <IoEye /> : <FaEyeSlash />}
                  </span>
                </div>

                <div className="text-right mt-1">
                  <a className="link link-hover text-sm">Forgot password?</a>
                </div>

                <button className="btn btn-neutral w-full mt-4">Login</button>

                <button
                  type="button"
                  onClick={hendlegooglesingin}
                  className="btn bg-white text-black border w-full mt-3 flex items-center gap-2"
                >
                  {/* Google Icon */}
                  <svg width="16" height="16" viewBox="0 0 512 512">
                    <path
                      fill="#ea4335"
                      d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    />
                  </svg>
                  Login with Google
                </button>

                <p className="text-center text-sm ">
                  Don’t have an account?
                  <Link
                    className="hover:underline text-red-400 ml-1"
                    to="/signup"
                  >
                    Sign up
                  </Link>
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
