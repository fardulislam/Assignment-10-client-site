import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const MyBooking = () => {
  const { user } = useContext(Authcontext);
  const [bookingCar, setBookingCar] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(
      `https://assignment-10-server-opal-two.vercel.app/booking-car?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setBookingCar(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [user]);

  const handleDelete = (bookingId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This booking will be cancelled!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-10-server-opal-two.vercel.app/booking-car/${bookingId}`,
          {
            method: "DELETE",
            headers: { authorization: `Bearer ${user.accessToken}` },
          },
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              // instant remove from UI
              setBookingCar((prev) => prev.filter((b) => b._id !== bookingId));

              Swal.fire(
                "Cancelled!",
                "Your booking has been cancelled.",
                "success",
              );
            }
          })
          .catch((err) => {
            console.error(err);
            Swal.fire("Error", "Could not cancel booking", "error");
          });
      }
    });
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (bookingCar.length === 0)
    return <p className="text-center mt-10">No bookings yet!</p>;

  return (
    <div className=" mt-24 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {bookingCar.map((booking) => (
        <div
          key={booking._id}
          className="card bg-base-100 shadow p-4 rounded-lg"
        >
          <img
            src={booking.carImage}
            alt={booking.carName}
            className="h-40 w-full object-cover rounded-md mb-2"
          />
          <h3 className="text-lg font-bold">{booking.carName}</h3>
          <p>৳ {booking.rentPrice} / day</p>
          <p className="badge badge-success">Booked</p>
          <button
            className="btn btn-outline bg-primary text-white my-4"
            onClick={() => handleDelete(booking._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyBooking;
