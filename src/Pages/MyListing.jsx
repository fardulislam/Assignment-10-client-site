import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Context/AuthContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const MyListing = () => {
  const { user } = useContext(Authcontext);
  const [cars, setcars] = useState([]);
  const navigate = useNavigate();
  console.log(user);

  const hendledelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-10-server-opal-two.vercel.app/car/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setcars((prevCars) => prevCars.filter((car) => car._id !== id));

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://assignment-10-server-opal-two.vercel.app/car?email=${user.email}`,
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        },
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setcars(data);
        });
    }
  }, [user]);

  console.log(cars);
  return (
    <div className="min-h-screen mt-25 w-11/12 mx-auto">
      <div className="overflow-x-auto rounded-xl border bg-base-100 shadow">
        <table className="table">
          <thead className="bg-base-200">
            <tr className="text-sm uppercase">
              <th className="text-left align-middle">Car</th>
              <th className="text-left align-middle">Category</th>
              <th className="text-left align-middle">Price</th>
              <th className="text-left align-middle">Status</th>
              <th className="text-right align-middle">Actions</th>
            </tr>
          </thead>

          <tbody>
            {cars.map((car) => (
              <tr key={car._id} className="hover:bg-base-200 transition">
                <td className="flex items-center gap-3">
                  <div className="w-10 h-10 h-10 rounded-full overflow-hidden">
                    {user?.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="user"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        🚗
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold">{car.name}</p>
                    <p className="text-xs text-gray-500">
                      ID: {car._id.slice(0, 6)}
                    </p>
                  </div>
                </td>

                <td>
                  <span className="badge badge-outline badge-sm">
                    {car.category}
                  </span>
                </td>

                <td className="font-medium">{car.rentPrice}</td>

                <td>
                  <div className="flex items-center gap-2">
                    <div
                      className={`badge ${
                        car.status === "available"
                          ? "badge-success"
                          : car.status === "booked"
                            ? "badge-error"
                            : "badge-warning"
                      }`}
                    >
                      {car.status === "available"
                        ? "Available"
                        : car.status === "booked"
                          ? "Booked"
                          : "Pending"}
                    </div>
                  </div>
                </td>

                <td className="text-right space-x-2">
                  <button
                    onClick={() => navigate(`/updatecar/${car._id}`)}
                    className="btn btn-xs btn-outline btn-info"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => hendledelete(car._id)}
                    className="btn btn-xs btn-outline btn-error"
                  >
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyListing;
