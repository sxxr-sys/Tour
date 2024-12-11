import React from "react";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

// Example data for trips
const tripData = [
  {
    name: "Mountain Adventure",
    image: Trip1,
    description: "Climb the highest peaks and experience the thrill of adventure.",
    link: "/mountain-adventure"
  },
  {
    name: "Tropical Getaway",
    image: Trip2,
    description: "Relax on pristine beaches with clear waters and sun-kissed skies.",
    link: "/tropical-getaway"
  },
  {
    name: "City Exploration",
    image: Trip3,
    description: "Explore the vibrant city life and immerse yourself in local culture.",
    link: "/city-exploration"
  }
];

function Trip() {
  return (
    <div className="py-16 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Top Trips</h1>
      <div className="flex gap-12 overflow-x-auto snap-x snap-mandatory">
        {tripData.map((trip, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl duration-300"
          >
            <img
              src={trip.image}
              alt={trip.name}
              className="w-96 h-60 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{trip.name}</h2>
              <p className="text-gray-700 text-sm mb-4">{trip.description}</p>
              <a
                href={trip.link}
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
}

export default Trip;
