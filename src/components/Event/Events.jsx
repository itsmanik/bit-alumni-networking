import React, { useEffect, useState } from "react";
import EventCardsPage from "./EventCardsPage";

const Events = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      eventName: "Tech Summit 2025",
      location: "San Francisco, CA",
      eventDate: "2023-05-10",
      eventTime: "9:00 AM",
      description:
        "A premier event bringing together industry leaders to discuss emerging trends in technology and innovation.",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      eventName: "AI & Machine Learning Conference",
      location: "New York, NY",
      eventDate: "2023-07-20",
      eventTime: "10:30 AM",
      description:
        "A gathering of experts and enthusiasts to explore advancements in AI and machine learning technologies.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      id: 4,
      eventName: "Frontend Dev Bootcamp",
      location: "Seattle, WA",
      eventDate: "2023-08-05",
      eventTime: "11:00 AM",
      description:
        "A hands-on workshop for mastering the latest in frontend web development, including React and CSS frameworks.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      id: 2,
      eventName: "Hackathon 2025",
      location: "Austin, TX",
      eventDate: "2023-06-15",
      eventTime: "8:00 AM",
      description:
        "A 48-hour coding competition where developers and tech enthusiasts collaborate to build innovative solutions.",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
  ]);
  return (
    <>
      <EventCardsPage events={events} />{" "}
    </>
  ); // Pass events to EventCardsPage component
};

export default Events;
