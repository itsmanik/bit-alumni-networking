import React, { useState } from "react";

const AlumniEventCreate = () => {
  const [eventData, setEventData] = useState({
    eventName: "",
    eventDate: "",
    eventTime: "",
    location: "",
    description: "",
    image: null,
    maxParticipants: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setEventData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !eventData.eventName ||
      !eventData.description ||
      !eventData.maxParticipants ||
      !eventData.location ||
      !eventData.eventDate ||
      !eventData.eventTime
    ) {
      alert("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append(
      "json_data",
      JSON.stringify({
        event_name: eventData.eventName,
        event_description: eventData.description,
        max_participants: eventData.maxParticipants,
        event_venue: eventData.location,
        event_date: eventData.eventDate,
        event_time: `${eventData.eventTime}:00`,
      })
    );

    if (eventData.image) {
      formData.append("event_image", eventData.image);
    }

    try {
      // Mock API call
      console.log("Form data submitted:", eventData);
      alert("Event created successfully!");
      setEventData({
        eventName: "",
        description: "",
        maxParticipants: "",
        location: "",
        eventDate: "",
        eventTime: "",
        image: null,
      });
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-[#3A843A] mb-6 text-center">
          Create an Event
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Event Name
            </label>
            <input
              type="text"
              name="eventName"
              value={eventData.eventName}
              onChange={handleChange}
              placeholder="Enter event name"
              className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none text-gray-800 focus:ring focus:ring-[#3A843A]/50"
              required
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-600">
                Date
              </label>
              <input
                type="date"
                name="eventDate"
                value={eventData.eventDate}
                onChange={handleChange}
                className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none text-gray-800 focus:ring focus:ring-[#3A843A]/50"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-600">
                Time
              </label>
              <input
                type="time"
                name="eventTime"
                value={eventData.eventTime}
                onChange={handleChange}
                className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none text-gray-800 focus:ring focus:ring-[#3A843A]/50"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Max Participants
            </label>
            <input
              type="number"
              name="maxParticipants"
              value={eventData.maxParticipants}
              onChange={handleChange}
              placeholder="Enter maximum participants"
              className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none text-gray-800 focus:ring focus:ring-[#3A843A]/50"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={eventData.location}
              onChange={handleChange}
              placeholder="Event location"
              className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none text-gray-800 focus:ring focus:ring-[#3A843A]/50"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              name="description"
              value={eventData.description}
              onChange={handleChange}
              placeholder="Brief event description"
              rows="4"
              className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none text-gray-800 focus:ring focus:ring-[#3A843A]/50"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Event Image (optional)
            </label>
            <input
              type="file"
              onChange={handleImageChange}
              className="mt-1 w-full text-sm text-gray-600"
              accept="image/*"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-2 bg-[#3A843A] text-white font-semibold rounded-md hover:bg-[#2F6B2F] transition duration-200"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default AlumniEventCreate;
