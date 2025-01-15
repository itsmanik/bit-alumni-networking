import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState([
    {
      name: "Manik S H",
      profile_picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJfO8hl9Z31uoxZIn76T8frM4SZqE0DA2PWA&s",
      role: "Software Developer",
      username: "maniksh2004",
      email: "manik.doe@example.com",
      phone_number: "+1234567890",
      college: "Tech University"
    }
  ]);

  if (!user || user.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container max-w-4xl mx-auto p-8 mt-10 border-[#353535] shadow-lg rounded-lg text-black bg-white">
      <Header user={user[0]} />
      <DetailsSection user={user[0]} />
    </div>
  );
};

const Header = ({ user }) => (
  <div className="header flex items-center space-x-6 mb-10">
    <img
      src={user.profile_picture || "/default-profile.png"}
      alt="Profile"
      className="w-32 h-32 rounded-full object-cover border-4 border-[#3A843A] shadow-md"
    />
    <div>
      <h1 className="text-4xl font-bold text-[#3A843A]">{user.name}</h1>
      <p className="text-lg text-[#3A843A]">{user.role}</p>
    </div>
  </div>
);

const DetailsSection = ({ user }) => (
  <div className="details-section grid grid-cols-2 gap-8">
    <Section title="Personal Details">
      <Detail label="Username" value={user.username} />
      <Detail label="Email" value={user.email} />
      <Detail label="Phone" value={user.phone_number} />
    </Section>
    <Section title="Professional Details">
      <Detail label="Role" value={user.role} />
      <Detail label="College" value={user.college} />
    </Section>
  </div>
);

const Section = ({ title, children }) => (
  <div className="section">
    <h2 className="text-xl font-semibold text-[#3A843A] mb-4">{title}</h2>
    <ul className="space-y-3">{children}</ul>
  </div>
);

const Detail = ({ label, value }) => (
  <li className="flex items-center">
    <span className="w-32 font-medium text-gray-700">{label}:</span>
    <span className="text-gray-700">{value}</span>
  </li>
);

export default Profile;
