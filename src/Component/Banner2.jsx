import React from "react";
import bannerlogo from "../assets/bookingIcon.png"
const Banner2 = () => {
  const service = [
    {
        icon:bannerlogo,
      header: "Booking pick & data",
      title:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
         icon:bannerlogo,
      header: "Booking pick & data",
      title:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
         icon:bannerlogo,
      header: "Booking pick & data",
      title:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10  ">
      {service.map(({ header, title,icon }) => (
        <div className="bg-white p-8 text-center rounded-2xl px-10 ">
          <img className="max-w-3xl mx-auto" src={icon} alt="" />
          <h1 className="text-2xl font-semibold">{header}</h1>
          <h2>{title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Banner2;
