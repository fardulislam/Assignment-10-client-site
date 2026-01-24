import React from "react";

const Card = ({card_collection}) => {
    const {name,category,brand,image,pricePerDay}= card_collection
  return (
    <div>
      <div className="card bg-base-100 w-full h-96 shadow-sm object-cover">
        <figure>
          <img
            src={image}
            alt="car"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Card;
