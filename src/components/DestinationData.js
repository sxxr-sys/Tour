import React from "react";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";

// Example data for destinations
const destinationData = [
  {
    name: "Mountain View",
    image: Mountain1,
    description: "Experience the breathtaking views from the top of the mountain.",
    link: "/mountain-view"
  },
  {
    name: "Tropical Island",
    image: Mountain2,
    description: "Relax on the sunny beaches and enjoy the tropical paradise.",
    link: "/tropical-island"
  },
  {
    name: "City Escape",
    image: Mountain3,
    description: "Explore the vibrant city life and its hidden gems.",
    link: "/city-escape"
  },
  {
    name: "Forest Adventure",
    image: Mountain4,
    description: "Get lost in the magical forest and enjoy the serene beauty.",
    link: "/forest-adventure"
  }
];

const DestinationData = () => {
  return (
    <div className="py-16 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Top Destinations</h1>
      <div className="flex gap-12">
        {destinationData.map((destination, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-4 flex h-4  rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{destination.name}</h2>
              <p className="text-gray-700 text-sm mb-4">{destination.description}</p>
              <a
                href={destination.link}
                className="inline-block text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                Explore More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationData;
