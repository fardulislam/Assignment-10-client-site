import React, { use } from "react";
import { Authcontext } from "../Context/AuthContext";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";

const Updatecar = () => {
  const { user } = use(Authcontext);

  const cardata = useLoaderData();
  const hendlesubmit = (e) => {
    e.preventDefault();
    const updatefromdata = {
      name: e.target.Name.value,
      description: e.target.description.value,
      category: e.target.category.value,
      rentPrice: Number(e.target.rentprice.value),
      location: e.target.location.value,
      image: e.target.image.value,
      status: e.target.status.value,
      createdAt: new Date(),
    };
    fetch(
      `https://assignment-10-server-opal-two.vercel.app/car-collection/${cardata._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatefromdata),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("update car data");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen  px-20 py-8 mt-24 max-w-11/12 mx-auto">
      <form
        onSubmit={hendlesubmit}
        className="max-w-3xl mx-auto px-12 py-4 bg-base-100 shadow rounded-xl space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Update car</h2>
        {/* Car Name */}
        <div>
          <label className="label">Car Name</label>
          <input
            type="text"
            name="Name"
            defaultValue={cardata.name}
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
            defaultValue={cardata.description}
          ></textarea>
        </div>

        {/* Category */}
        <div>
          <label className="label">Category</label>
          <select
            name="category"
            className="select select-bordered w-full"
            required
            defaultValue={cardata.category}
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
            defaultValue={cardata.rentprice}
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
            defaultValue={cardata.location}
            placeholder="e.g. Dhaka, Bangladesh"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label">Status</label>
          <select
            name="status"
            defaultValue={cardata.status}
            className="select select-bordered w-full"
            required
          >
            <option value="available">Available</option>
            <option value="booked">Booked</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        {/* Image URL */}
        <div>
          <label className="label">Hosted Image URL</label>
          <input
            type="url"
            name="image"
            defaultValue={cardata.image}
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
        <button type="submit" className="btn btn-primary px-10 w-full">
          Update car
        </button>
      </form>
    </div>
  );
};

export default Updatecar;
