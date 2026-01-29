import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Authcontext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();

  const [show, setshow] = useState(false);

  const { createuser } = useContext(Authcontext);

  const hendlesubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, email, photo, password);

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must include at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must include at least one lowercase letter");
      return;
    }
    if (!/\d/.test(password)) {
      toast.error("Password must include at least one number");
      return;
    }
    if (!/[@$!%*?&]/.test(password)) {
      toast.error("Password must include at least one special character");
      return;
    }

    createuser(email, password)
      .then((result) => {
        console.log(result);
        toast.success("signup successful");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Your email already exist");
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center  pt-24 pb-10">
      <div
        className="card w-full max-w-11/12 mx-auto shadow-2xl
    bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl  "
      >
        <div className="card-body bg-white rounded-2xl ">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image Section */}
            <div className="w-full md:w-1/2 hidden md:block">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/012/024/324/small/a-person-using-a-smartphone-to-fill-out-a-registration-form-registration-register-fill-in-personal-data-use-the-application-vector.jpg"
                alt="Register"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Form Section */}
            <div className="w-full px-10 md:w-1/2">
            <div className="py-5">
              <h1 className="font-semibold text-5xl">Create, <br></br> <span className="text-blue-300">Your Account</span></h1>
            </div>
              <form onSubmit={hendlesubmit}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="input w-full"
                    placeholder="Your name"
                    required
                  />

                  <label className="label">Photo URL</label>
                  <input
                    name="photo"
                    type="text"
                    className="input w-full"
                    placeholder="Photo url"
                  />

                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input w-full"
                    placeholder="Email"
                    required
                  />

                  <div className="relative mt-1">
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

                  <button className="btn btn-neutral w-full mt-4">
                    Sign up
                  </button>

                  <p className="text-center text-sm ">
                    Already have an account?
                    <Link
                      className="hover:underline text-red-400 ml-1"
                      to="/login"
                    >
                      Sign in
                    </Link>
                  </p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
