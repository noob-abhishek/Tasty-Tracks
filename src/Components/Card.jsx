import React from "react";
import "../App.css";
import { IMGapi } from "../utils/env";
const Card = ({ name, cuisines, cloudinaryImageId, costForTwo, avgRating }) => {
  return (
    <div className="h-full bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
        <img
          src={
            IMGapi +
             cloudinaryImageId
          }
          alt="Restaurant"
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-dark truncate h-16 font-sans">
            {cuisines.join(", ")}
          </p>
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm font-medium">
              Cost: ${costForTwo}
            </p>
            <p className="text-sm font-medium">
              {avgRating} stars
            </p>
          </div>
        </div>
      </div>
  );
};

export default Card;
