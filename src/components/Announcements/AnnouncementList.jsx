import React, { useState, useEffect } from "react";

const AnnouncementsList = () => {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Welcome to the Alumni Portal!",
      message: "We are thrilled to have you here. Stay tuned for updates.",
      user_name: "Admin",
      created_at: "2025-01-01T10:00:00Z",
    },
    {
      id: 2,
      title: "Upcoming Webinar",
      message: "Join us for an exclusive webinar on career advancements.",
      user_name: "Webinar Team",
      created_at: "2025-01-10T15:30:00Z",
    },
  ]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        // Mock fetching from API
        // Uncomment below and remove mock data when API is available
        // const response = await axiosInstance.get("/api/announcements");
        // setAnnouncements(response.data);

        if (announcements.length === 0) {
          setError("No announcements currently");
        }
      } catch (error) {
        setError(
          "Only alumni can view announcements or no announcements currently"
        );
      }
    };
    fetchAnnouncements();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-[#3A843A]">Announcements</h2>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="space-y-6">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-gray-100 border border-[#3A843A] p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-[#3A843A]">
                {announcement.title}
              </h3>
              <p className="text-gray-700 mt-2">{announcement.message}</p>
              <div className="mt-4 text-sm text-gray-500">
                <p>
                  <strong>Posted by:</strong> {announcement.user_name}
                </p>
                <p>
                  <strong>Created at:</strong>{" "}
                  {new Date(announcement.created_at).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnnouncementsList;
