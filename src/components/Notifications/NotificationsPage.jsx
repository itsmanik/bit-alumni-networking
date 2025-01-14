import { FaTrash, FaBell } from 'react-icons/fa';
import React, { useState } from "react";
import NotificationModal from "./NotificationModal";
import "./Notifications.css";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([
    { title: "New connection request from John Doe", timestamp: "2025-01-15T12:00:00.000Z" },
    { title: "Your post on 'Tech Innovations' got 10 new likes", timestamp: "2025-01-15T12:02:15.000Z" },
    { title: "Sarah Smith commented on your recent article", timestamp: "2025-01-15T12:05:30.000Z" },
    { title: "You have a new message from Mark Johnson", timestamp: "2025-01-15T12:07:45.000Z" },
    { title: "Alex Turner mentioned you in a post", timestamp: "2025-01-15T12:10:00.000Z" },
    { title: "Congratulations! You've reached 500 connections", timestamp: "2025-01-15T12:12:30.000Z" },
    { title: "Your connection, Emma Brown, has a new job update", timestamp: "2025-01-15T12:15:00.000Z" },
    { title: "Jane Miller shared a new post you might like", timestamp: "2025-01-15T12:17:30.000Z" },
    { title: "Your profile is now 98% complete", timestamp: "2025-01-15T12:20:45.000Z" },
    { title: "New job opportunity: 'Software Developer' at TechCorp", timestamp: "2025-01-15T12:23:00.000Z" }
  ]);
  const [selectedNotification, setSelectedNotification] = useState(null);
  
  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification); // Set the selected notification for modal display
  };

  const closeModal = () => {
    setSelectedNotification(null); // Close modal by setting selectedNotification to null
  };

  return (
    <div className="notifications-page min-h-screen p-6 flex flex-col items-center">
      <ul className="notifications-list w-full max-w-3xl space-y-4">
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <li
              key={index}
              className="notification-item bg-white p-4 rounded-lg shadow-md cursor-pointer transition-none"
              onClick={() => handleNotificationClick(notification)}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {notification.title}
              </h3>
              <p className="text-sm text-gray-500">
                {new Date(notification.timestamp).toLocaleString()}
              </p>
            </li>
          ))
        ) : (
          <p className="text-gray-800">No notifications available.</p>
        )}
      </ul>

      {/* Display modal if a notification is selected */}
      {selectedNotification && (
        <NotificationModal
          notification={selectedNotification} // Correct prop name passed here
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default NotificationsPage;
