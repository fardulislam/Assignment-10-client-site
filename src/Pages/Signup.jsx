import React, { useContext } from "react";
import { Link } from "react-router";
import { Authcontext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const Signup = () => {
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
      })
      .catch((error) => {
        console.log(error);
        toast.error("Your email already exist");
      });
  };
  return (
    <div className=" min-h-screen pt-30 pb-10 flex justify-center items-center  bg-pink-400">
      <div
        className="card w-full max-w-sm shadow-2xl
        bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl
         "
      >
        <div className="card-body">
          <form onSubmit={hendlesubmit} action="">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input w-full"
                placeholder="Your name"
              />
              <label className="label">Photo URL</label>
              <input
                name="photo"
                type="photo"
                className="input w-full"
                placeholder="Photo url"
              />
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input w-full"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input w-full"
                placeholder="Password"
              />
              <button className="btn btn-neutral mt-4">Sign up</button>

              <p className="text-center text-sm">
                Already Have an Account Please?{" "}
                <Link className="hover:underline text-red-400" to={"/login"}>
                  Sign in
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
