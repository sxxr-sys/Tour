import React from "react";

function TripData({ name, image, description, link }) {
  return (
    <div className="bg-white rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl duration-300 w-80">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">{name}</h2>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <a
          href={link}
          className="inline-block text-blue-600 hover:text-blue-800 font-medium text-sm"
        >
          Explore More
        </a>
      </div>
    </div>
  );
}

export default TripData;
