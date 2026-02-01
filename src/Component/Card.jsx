import React from "react";
import { Link } from "react-router";

const Card = ({ data }) => {
  if (!data) return null;
  const { name, rentPrice, providerName, image, category, _id ,status} = data;
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-full  hover:shadow-xl ">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
       <div className="flex justify-between items-center"> <h2 className="text-xl font-semibold mb-1">{name}</h2>
        <div className="badge badge-warning">{status}</div></div>
        <p className="text-gray-600 mb-1">Type: {category}</p>
        <p className="text-gray-800 font-bold mb-2">${rentPrice} / day</p>
        <p className="text-gray-500 mb-4">Provider: {providerName}</p>
        <Link
          to={`/car-details/${_id}`}
          className=" w-full btn btn-outline bg-secondary text-white py-2 rounded-lg"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
