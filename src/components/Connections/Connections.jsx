import React, { useState, useEffect } from "react";
import classes from "./Connections.module.css";

const Connections = () => {
  const [invitations, setInvitations] = useState([
    {
      profile_picture:
        "https://media.licdn.com/dms/image/sync/v2/D4D27AQGuPpXOoMeA1w/articleshare-shrink_800/articleshare-shrink_800/0/1714402886195?e=2147483647&v=beta&t=hGi33JerP4XwLx3OUP-hJkJbMvY6fXPegU9-8FOEg1o",
      name: "Ashwini Kamath",
    },
  ]);
  const [connections, setConnections] = useState([
    {
      profile_picture:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=faces&fit=crop&w=500&h=500&q=80",
      name: "Ravi Sharma",
      job: "Data Scientist @ Meta",
    },
    {
      profile_picture:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?crop=faces&fit=crop&w=500&h=500&q=80",
      name: "Amit Singh",
      job: "Cloud Engineer @ Google",
    },
    {
      profile_picture:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?crop=faces&fit=crop&w=500&h=500&q=80",
      name: "Isha Verma",
      job: "Backend Developer @ Spotify",
    },
    {
      profile_picture:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=faces&fit=crop&w=500&h=500&q=80",
      name: "Ananya Gupta",
      job: "Embedded Systems Engineer @ Tesla",
    },
    {
      profile_picture:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=faces&fit=crop&w=500&h=500&q=80",
      name: "Kunal Desai",
      job: "Mobile Developer @ Adobe",
    },
    {
      profile_picture:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=faces&fit=crop&w=500&h=500&q=80",
      name: "Tanya Bansal",
      job: "Machine Learning Engineer @ Nvidia",
    },
    {
      profile_picture:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?crop=faces&fit=crop&w=500&h=500&q=80",
      name: "Rajiv Bhatt",
      job: "Game Developer @ Unity",
    },
    {
      profile_picture:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=faces&fit=crop&w=500&h=500&q=80",
      name: "Megha Jain",
      job: "Blockchain Developer @ Coinbase",
    },
    {
      profile_picture:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=500&h=500&q=80",
      name: "Aditya Khanna",
      job: "DevOps Engineer @ Red Hat",
    },
    {
      profile_picture:
        "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?crop=faces&fit=crop&w=500&h=500&q=80",
      name: "Sneha Rao",
      job: "Business Analyst @ Deloitte",
    },
    {
      profile_picture:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=faces&fit=crop&w=500&h=500&q=80",
      name: "Rahul Malhotra",
      job: "Full Stack Developer @ Atlassian",
    },
  ]);
    
  return (
    <div className={classes.mainContainer}>
      {/* Invitations Section */}
      <div className={classes.invitationSection}>
        <h2 className={classes.sectionTitle}>Alumni Connection Invitations</h2>
        {invitations.length > 0 ? (
          <div className={classes.invitationsList}>
            {invitations.map((invitation, index) => (
              <div key={index} className={classes.invitationCard}>
                <img
                  src={invitation.profile_picture}
                  alt={invitation.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className={classes.invitationDetails}>
                  <h3 className={classes.invitationName}>{invitation.name}</h3>
                  <p className={classes.invitationJob}>{invitation.job}</p>
                  <button
                    className={classes.invitationButton}
                    onClick={() => handleModalOpen(invitation)}
                  >
                    Accept
                  </button>
                  <button
                    className={classes.invitationButton2}
                    onClick={() => handleModalOpen(invitation)}
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No new connection invitations.</p>
        )}
      </div>

      {/* Connections Section */}
      <div className={classes.connectionSection}>
        <h2 className={classes.sectionTitle}>Your Alumni Connections</h2>
        {connections.length > 0 ? (
          <div className={classes.connectionsList}>
            {connections.map((connection, index) => (
              <div key={index} className={classes.connectionCard}>
                <img
                  src={connection.profile_picture}
                  alt={connection.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover"
                />
                <div className="text-center">
                  <h2 className="text-xl font-semibold mt-3">
                    {connection.name}
                  </h2>
                  <p className="text-sm text-gray-600">{connection.job}</p>
                  <a href="#" className="text-orange-700 mt-2 block">
                    View Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No connections available.</p>
        )}
      </div>      
    </div>
  );
};

export default Connections;
