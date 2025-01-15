import React, { useState, useEffect } from "react";

const AnnouncementsList = () => {
  const [announcements, setAnnouncements] = useState([
    {
      "id": 3,
      "title": "Alumni Donation to Support Current Students",
      "message": "We are proud to announce that an esteemed alumni member, John Doe, has generously donated $50,000 to support scholarships and career development programs for our current students. This contribution will help nurture the next generation of leaders. We are grateful for this continued support and invite all alumni to consider contributing to the future of BIT Sindri students.",
      "user_name": "Alumni Relations",
      "created_at": "2025-01-15T09:00:00Z"
    },
    {
      "id": 2,
      "title": "Upcoming Webinar",
      "message": "Join us for an exclusive webinar on career advancements.",
      "user_name": "Webinar Team",
      "created_at": "2025-01-10T15:30:00Z"
    },
    ,
    {
      "id": 4,
      "title": "Alumni Mentorship Program Launched",
      "message": "We are excited to launch a new alumni mentorship program aimed at connecting current students with alumni mentors. This program will help students gain valuable insights into the industry, receive guidance on career choices, and enhance their professional networks. Sign up today and be part of shaping the future of BIT Sindri.",
      "user_name": "Alumni Relations",
      "created_at": "2025-01-15T12:00:00Z"
    }
  ]
  );
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
