import React, { use } from "react";
import { Authcontext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Addcar = () => {
  const { user } = use(Authcontext);
  console.log(user);

  const navigate = useNavigate();
  const hendlesubmit = (e) => {
    e.preventDefault();
    const fromdata = {
      name: e.target.Name.value,
      description: e.target.description.value,
      category: e.target.category.value,
      rentPrice: e.target.rentprice.value,
      location: e.target.location.value,
      image: e.target.image.value,
      providerName: e.target.providerName.value,
      providerEmail: e.target.providerEmail.value,
      createdAt: new Date(),
    };
    fetch("http://localhost:3000/car-collection", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fromdata),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/browscar");
        toast.success("add car data");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen  p-8 mt-24 max-w-11/12 mx-auto">
      <form
        onSubmit={hendlesubmit}
        className="max-w-3xl mx-auto p-6 bg-base-100 shadow rounded-xl space-y-4"
      >
        {/* Car Name */}
        <div>
          <label className="label">Car Name</label>
          <input
            type="text"
            name="Name"
            placeholder="e.g. Toyota Corolla"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="label">Description</label>
          <textarea
            name="description"
            placeholder="Write a short description about the car"
            className="textarea textarea-bordered w-full"
            rows={4}
            required
          ></textarea>
        </div>

        {/* Category */}
        <div>
          <label className="label">Category</label>
          <select
            name="category"
            className="select select-bordered w-full"
            required
          >
            <option value="">Select category</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Luxury">Luxury</option>
            <option value="Electric">Electric</option>
          </select>
        </div>

        {/* Rent Price */}
        <div>
          <label className="label">Rent Price (per day)</label>
          <input
            type="number"
            name="rentprice"
            placeholder="e.g. 3500"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            placeholder="e.g. Dhaka, Bangladesh"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="label">Hosted Image URL</label>
          <input
            type="url"
            name="image"
            placeholder="https://images.unsplash.com/..."
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Provider Name (Read Only) */}
        <div>
          <label className="label">Provider Name</label>
          <input
            type="text"
            name="providerName"
            value={user?.displayName}
            readOnly
            className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Provider Email (Read Only) */}
        <div>
          <label className="label">Provider Email</label>
          <input
            type="email"
            name="providerEmail"
            value={user?.email}
            readOnly
            className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full">
          Add Car
        </button>
      </form>
    </div>
  );
};

export default Addcar;
