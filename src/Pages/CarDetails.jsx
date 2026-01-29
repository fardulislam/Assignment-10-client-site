import { Link, Navigate, useLoaderData, useNavigate } from "react-router";
import Loading from "../Component/Loading";
import Swal from "sweetalert2";
import { useContext } from "react";
import { Authcontext } from "../Context/AuthContext";

const CarDetails = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(Authcontext);
  console.log(data);
  if (!data) {
    return <Loading></Loading>;
  }

  const handleBooking = () => {
    const booking = {
      carId: data._id,
      carName: data.name,
      carImage: data.image,
      rentPrice: data.price,
      userEmail: user.email,
    };

    fetch("https://assignment-10-server-opal-two.vercel.app/booking-car", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Booking result:", data);
        Swal.fire({
          icon: "success",
          title: "Booked!",
          text: `${booking.carName} has been booked.`,
        });
        navigate("/mybooking"); // correct navigation
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Booking failed",
          text: "Something went wrong",
        });
      });
  };

  return (
    <div className="min-h-screen mt-24 max-w-5xl mx-auto p-6">
      <img src={data.image} className="w-full h-96 object-cover rounded-xl" />
      <h1 className="text-3xl font-bold mt-4">{data.name}</h1>
      <p>{data.brand}</p>
      <p className="text-xl font-semibold">${data.price}/day</p>
      <div className="flex justify-end ">
        <button onClick={handleBooking} className="btn btn-outline">
          Book now
        </button>
      </div>
    </div>
  );
};

export default CarDetails;
