import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const EventModal = ({ event, closeModal }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger the animation when component mounts
    setShow(true);
    return () => setShow(false); // Clean up on unmount
  }, []);

  const handleClose = () => {
    // Start the closing animation
    setShow(false);
    setTimeout(closeModal, 300); // Delay closeModal to allow animation to finish
  };

  return (
    <div
      className={`fixed inset-0 bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur-lg flex justify-center items-center z-50 ${
        show ? "fade-in" : "fade-out"
      }`}
    >
      <div
        className={`bg-white w-full max-w-lg mx-4 p-6 rounded-lg shadow-lg relative transform transition-transform duration-300 ${
          show ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={handleClose}
        >
          <FaTimes size={20} />
        </button>

        <img
          src={event.image || "https://via.placeholder.com/400x200"}
          alt={event.eventName}
          className="w-full h-56 object-cover rounded-lg mb-4"
        />

        <h2 className="text-2xl font-bold text-[#3A843A] mb-2">
          {event.eventName}
        </h2>
        <p className="text-gray-600 mb-4">{event.location}</p>
        <p className="text-gray-500 mb-2">
          Date: {event.eventDate} | Time: {event.eventTime}
        </p>
        <div className="text-gray-700 leading-relaxed">
          {event.description}
        </div>

        <button
          className="mt-6 bg-[#3A843A] text-white px-4 py-2 rounded hover:bg-[#2F6B2F] transition"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EventModal;
